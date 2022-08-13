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
    <VAceEditor
      v-model:value="states.content"
      class="vue-ace-editor"
      :lang="states.lang"
      :theme="states.theme"
      :options="{ useWorker: true }"
    />
  </main>
</template>

<script setup>
import { reactive, watch } from 'vue';
import { VAceEditor } from 'vue3-ace-editor';
import './ace-config';

const langs = [
  'json',
  'javascript',
  'html',
];

const themes = [
  'github',
  'chrome',
  'monokai',
];

const states = reactive({
  lang: 'json',
  theme: 'github',
  content: '',
});

watch(() => states.lang, async lang => {
  states.content = (await ({
    json: import('../package.json?raw'),
    javascript: import('./ace-config.js?raw'),
    html: import('../index.html?raw'),
  }[lang])).default;
}, { immediate: true });
</script>


<style scoped>
main {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
}

header {
  display: flex;
}

select + select {
  margin-left: 15px;
}

.vue-ace-editor {
  flex: 1;
  margin-top: 15px;
  font-size: 16px;
  border: 1px solid;
}
</style>
