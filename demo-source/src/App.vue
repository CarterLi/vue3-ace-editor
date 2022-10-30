<template>
  <header>
    <select v-model="states.lang">
      <option v-for="lang of langs" :value="lang">{{ lang }}</option>
    </select>
    <select v-model="states.theme">
      <option v-for="theme of themes" :value="theme">{{ theme }}</option>
    </select>
  </header>
  <main style="height: 0">
    <VAceEditor
      ref="aceRef"
      v-model:value="states.content"
      class="vue-ace-editor"
      :lang="states.lang"
      :theme="states.theme"
      :options="{
        useWorker: true,
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
      }"
    />
    <OutlineTree v-if="$refs.aceRef" class="outline-tree" :editor="$refs.aceRef._editor" :content="states.content" />
  </main>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import { VAceEditor } from 'vue3-ace-editor';
import './ace-config';
import OutlineTree from './OutlineTree.vue';

const langs = ['json', 'javascript', 'html', 'yaml'];
const themes = ['github', 'chrome', 'monokai'];

const states = reactive({
  lang: 'yaml',
  theme: 'github',
  content: '',
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
  },
  { immediate: true },
);
</script>

<style lang="scss" scoped>
header {
  display: flex;
}

select {
  margin-right: 15px;
}

main {
  flex: 1;
  margin-top: 15px;
  display: flex;
}

.vue-ace-editor {
  font-size: 16px;
  border: 1px solid;
  flex: 1;
}

.outline-tree {
  width: 500px;
  margin-left: 15px;
  border: 1px solid;
  font-size: 16px;
}
</style>
