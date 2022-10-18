<template>
  <aside>
    <OutlineNode
      v-if="states.data"
      :node="states.data"
      :class-name="node => (node === states.highlight ? 'active' : null)"
      @click-title="onClickTitle"
    />
  </aside>
</template>
<script lang="ts" setup>
import { type Ace, Range as AceRange } from 'ace-builds';
import { onMounted, reactive, markRaw, nextTick, getCurrentInstance, watch, onBeforeMount } from 'vue';

import OutlineNode from './OutlineNode.vue';
import type { OutlineFoldNodeModel } from './OutlineFoldNode';

const props = defineProps<{ editor: Ace.Editor; content: string }>();
const instance = getCurrentInstance().proxy;

const states = reactive({
  data: null as OutlineFoldNodeModel,
  highlight: null as OutlineFoldNodeModel,
});

function genOutlineData() {
  const session: Ace.EditSession &
    Ace.Folding & {
      foldWidgets: string[];
      getFoldWidget(row: number): string;
      getFoldWidgetRange(row: number): Ace.Range;
    } = props.editor.session as any;

  if (!session.foldWidgets) return setTimeout(genOutlineData, 1);
  const foldRanges = [] as Ace.Range[];
  for (let row = 0; row < session.getLength(); ++row) {
    const foldWidget = (session.foldWidgets[row] ??= session.getFoldWidget(row));
    if (foldWidget === 'start') {
      foldRanges.push(session.getFoldWidgetRange(row));
    }
  }

  const tree = (function createTree(node: OutlineFoldNodeModel, ranges: Ace.Range[]) {
    let range: Ace.Range;
    while ((range = ranges[0])) {
      if (node.range.containsRange(range)) {
        const child: OutlineFoldNodeModel = {
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
    states.data = markRaw(tree.children[0]);
  } else {
    states.data = markRaw(tree);
  }
}

function onClickTitle(node: OutlineFoldNodeModel) {
  props.editor.selection.setRange(AceRange.fromPoints(node.range.start, node.range.start));
  props.editor.centerSelection();
  props.editor.focus();
}

watch(() => props.content, genOutlineData, { immediate: true });

function onChangeCursor() {
  if (!states.data) return;
  const range = props.editor.selection.getRange();

  states.highlight = markRaw(
    (function findContainNode(node: OutlineFoldNodeModel) {
      if (node.range.containsRange(range)) {
        for (const child of node.children) {
          const result = findContainNode(child);
          if (result) return result;
        }
        return node;
      }
    })(states.data),
  );

  nextTick(() =>
    (instance.$el as HTMLElement).querySelector('.active')?.scrollIntoView({ block: 'center', behavior: 'smooth' }),
  );
}

onMounted(() => {
  props.editor.selection.on('changeCursor', onChangeCursor);
});
onBeforeMount(() => {
  props.editor.selection.off('changeCursor', onChangeCursor);
});
</script>
<style scoped>
aside {
  overflow: auto;
  font-family: monospace;
}
</style>
