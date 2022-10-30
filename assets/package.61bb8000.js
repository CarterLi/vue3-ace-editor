const e=`{
  "name": "vue3-ace-editor-demo",
  "description": "Vue3-ace-editor demo with syntax checking",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "rm -rf ../assets && vite build --outDir ..",
    "preview": "vite preview"
  },
  "dependencies": {
    "ace-builds": "^1.12.1",
    "vue": "^3.2.41",
    "vue3-ace-editor": "^2.2.2"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^3.1.2",
    "sass": "^1.55.0",
    "vite": "^3.1.8"
  }
}
`;export{e as default};