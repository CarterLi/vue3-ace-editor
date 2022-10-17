<template>
  <main>
    <header>
      <select v-model="states.lang">
        <option v-for="lang of langs" :value="lang">{{ lang }}</option>
      </select>
      <select v-model="states.theme">
        <option v-for="theme of themes" :value="theme">{{ theme }}</option>
      </select>
    </header>
    <article style="height: 0">
      <VAceEditor
        ref="aceRef"
        v-model:value="states.content"
        class="vue-ace-editor"
        :lang="states.lang"
        :theme="states.theme"
        :options="{ useWorker: true }"
        @change="genOutline()"
      />
      <aside ref="asideRef">
        <Outline
          v-if="states.outline"
          :node="states.outline"
          :class-name="node => (node === states.outlineHighlight ? 'active' : null)"
          @enter-title="enterTitle"
          @leave-title="leaveTitle"
        />
      </aside>
    </article>
  </main>
</template>

<script setup lang="ts">
import { type Ace, Range as AceRange } from 'ace-builds';
import { reactive, watch, ref, nextTick, onMounted, markRaw } from 'vue';
import { VAceEditor } from 'vue3-ace-editor';
import './ace-config';
import Outline from './Outline.vue';

const console = window.console;

const aceRef = ref<InstanceType<typeof VAceEditor>>();
const asideRef = ref<HTMLElement>();

const langs = ['json', 'javascript', 'html', 'yaml'];

const themes = ['github', 'chrome', 'monokai'];

interface FoldNode {
  range: Ace.Range;
  text: string;
  children: FoldNode[];
  parent: FoldNode;
}

const states = reactive({
  lang: 'yaml',
  theme: 'github',
  content: '',
  outline: null as FoldNode,
  outlineHighlight: null as FoldNode,
});

watch(
  () => states.lang,
  async lang => {
    states.content = (
      await {
        json: import('../package.json?raw'),
        javascript: import('./ace-config.js?raw'),
        html: import('../index.html?raw'),
        yaml: import('../pnpm-lock.yaml?raw'),
      }[lang]
    ).default;
    setTimeout(genOutline, 1);
  },
  { immediate: true },
);

function genOutline() {
  const editor: Ace.Editor = (aceRef.value as any)._editor;
  /** @type {import('ace-builds').Ace.EditSession & import('ace-builds').Ace.Folding} */
  const session: Ace.EditSession &
    Ace.Folding & {
      foldWidgets: string[];
      getFoldWidget(row: number): string;
      getFoldWidgetRange(row: number): Ace.Range;
    } = editor.session as any;

  if (!session.foldWidgets) return setTimeout(genOutline, 1);
  const foldRanges = [] as Ace.Range[];
  for (let row = 0; row < session.getLength(); ++row) {
    const foldWidget = (session.foldWidgets[row] ??= session.getFoldWidget(row));
    if (foldWidget === 'start') {
      foldRanges.push(session.getFoldWidgetRange(row));
    }
  }

  const tree = (function createTree(node: FoldNode, ranges: Ace.Range[]) {
    let range: Ace.Range;
    while ((range = ranges[0])) {
      if (node.range.containsRange(range)) {
        const child: FoldNode = {
          range,
          text: session.getLine(range.start.row).trim(),
          children: [],
          parent: node,
        };
        node.children.push(child);
        ranges.shift();
        createTree(child, ranges);
      } else {
        return node;
      }
    }
    return node;
  })(
    {
      range: AceRange.fromPoints({ row: 0, column: 0 }, { row: 1e8, column: 0 }),
      text: 'Root',
      children: [],
      parent: null,
    },
    foldRanges,
  );
  if (tree.children.length === 1 && tree.children[0].range.isEqual(tree.range)) {
    states.outline = markRaw(tree.children[0]);
  } else {
    states.outline = markRaw(tree);
  }
}

let hoverHandle = 0;
function enterTitle(node: FoldNode) {
  clearTimeout(hoverHandle);
  hoverHandle = setTimeout(() => {
    const editor: Ace.Editor = (aceRef.value as any)._editor;
    editor.selection.setRange(AceRange.fromPoints(node.range.start, node.range.start));
    editor.centerSelection();
    editor.focus();
  }, 500);
}

function leaveTitle(node: FoldNode) {
  clearTimeout(hoverHandle);
}

onMounted(() => {
  const editor: Ace.Editor = (aceRef.value as any)._editor;
  editor.selection.on('changeCursor', () => {
    if (!states.outline) return;
    const range = editor.selection.getRange();

    states.outlineHighlight = markRaw(
      (function findContainNode(node: FoldNode) {
        if (node.range.containsRange(range)) {
          for (const child of node.children) {
            const result = findContainNode(child);
            if (result) return result;
          }
          return node;
        }
      })(states.outline),
    );
    nextTick(() => asideRef.value.querySelector('.active')?.scrollIntoViewIfNeeded());
  });
});
</script>

<style lang="scss" scoped>
main {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
}

header {
  display: flex;
}

select {
  margin-right: 15px;
}

article {
  flex: 1;
  margin-top: 15px;
  display: flex;
}

.vue-ace-editor {
  font-size: 16px;
  border: 1px solid;
  flex: 1;
}

aside {
  width: 500px;
  overflow: auto;
  font-family: monospace;
  margin-left: 15px;
  border: 1px solid;
  font-size: 16px;

  > details,
  > div {
    margin: 0;
    border: 0;
  }

  :deep(summary:hover) {
    background: rgb(245, 245, 245);
  }

  :deep(details.active > summary) {
    background: rgb(255, 255, 204);
  }
}
</style>
