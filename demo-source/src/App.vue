<template>
  <VAceEditor
    v-model:value="content"
    lang="json"
    theme="chrome"
    style="height: 100%"
    :options="{ useWorker: true }"
  />
</template>

<script setup>
import { ref } from 'vue';
import { VAceEditor } from 'vue3-ace-editor';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-chrome';
import ace from 'ace-builds';
import workerJsonUrl from 'ace-builds/src-noconflict/worker-json?url';
ace.config.setModuleUrl('ace/mode/json_worker', workerJsonUrl);

import packageJson from '../package.json';

const content = ref(JSON.stringify(packageJson, null, 2));
</script>


<style>
html, body, #app {
  height: 100%;
  margin: 0;
}
#app {
  font-family: system-ui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
