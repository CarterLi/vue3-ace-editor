vue3-ace-editor
====================


[![npm](https://img.shields.io/npm/v/vue3-ace-editor.svg)](https://www.npmjs.com/package/vue3-ace-editor)


A packaging of [ace](https://ace.c9.io/). Inspired by [vue2-ace-editor](https://github.com/chairuosen/vue2-ace-editor), but supports [Vue 3](https://github.com/vuejs/vue-next)

## How to use

1. Install

    ```shell
    yarn add vue3-ace-editor
    ```

2. Register it in `components` of Vue options

    ```js
    import { VAceEditor } from 'vue3-ace-editor';

    export default {
        data,
        methods,
        ...
        components: {
            VAceEditor,
        },
    }
    ```

3. Use the component in template

    ```html
    <v-ace-editor
        v-model:value="content"
        @init="editorInit"
        lang="html"
        theme="chrome"
        style="height: 300px" />
    ```

    prop `v-model:value` is required. `<v-ace-editor>` has no height by default. Its height must be specified manually, or set both `min-lines` and `max-lines` to make the editor's height auto-grow.

    prop `lang`, `theme` is same as [ace-editor's doc](https://github.com/ajaxorg/ace)

## Deferences with [vue2-ace-editor](https://github.com/chairuosen/vue2-ace-editor)

1. This component uses [ace-builds](https://www.npmjs.com/package/ace-builds) directly, instead of the outdated wrapper [brace](https://www.npmjs.com/package/brace)
1. DOM size changes are detected automatically using [ResizeObserver](resize-observer-polyfill), thus no `width` / `height` props needed.
1. For easier usage, more props / events added / emitted.
    1. Prop `readonly`: This Boolean attribute indicates that the user cannot modify the value of the control.
    1. Prop `placeholder`: A hint to the user of what can be entered in the control.
    1. Prop `wrap`: Indicates whether the control wraps text.
    1. Prop `printMargin`: A short hand of `showPrintMargin` and `printMarginColumn`.
    1. Prop `minLines` and `maxLines`: Specifiy the minimum and maximum number of lines.
    1. All ace events emitted. Docs can be found here: <https://ace.c9.io/#api=editor&nav=api>
    1. Some commonly used methods `focus`, `blur`, `selectAll` provided as shortcuts.

## Enable syntax checking

To enable syntax checking, module `ace/mode/lang_worker` must be registered, and option `useWorker: true` must be set.

Take JSON for example:

```ts
import workerJsonUrl from 'ace-builds/src-noconflict/worker-json?url'; // For vite

import workerJsonUrl from 'file-loader?esModule=false!ace-builds/src-noconflict/worker-json.js'; // For webpack / vue-cli

ace.config.setModuleUrl('ace/mode/json_worker', workerJsonUrl);
```

```html
<v-ace-editor v-model:value="json" lang="json" :options="{ useWorker: true }" />
```

See also https://github.com/CarterLi/vue3-ace-editor/issues/3#issuecomment-768190528 to load the worker file from CDN

## Breaking change

Using of `ace-builds/webpack-resolver` is removed due to bug https://github.com/CarterLi/vue3-ace-editor/issues/3. You MUST import `theme` and `mode` yourself. eg.

```js
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-chrome';
```

To use dynamic loading to avoid first-load overhead

```js
import ace from 'ace-builds';

import modeJsonUrl from 'ace-builds/src-noconflict/mode-json?url';
ace.config.setModuleUrl('ace/mode/json', modeJsonUrl);

import themeChromeUrl from 'ace-builds/src-noconflict/theme-chrome?url';
ace.config.setModuleUrl('ace/theme/chrome', themeChromeUrl);
```

Find all supported themes and modes in `node_modules/ace-builds/src-noconflict`

## Minimal example using vite

* Preview: <https://carterli.github.io/vue3-ace-editor/>
* Source: <https://github.com/CarterLi/vue3-ace-editor/tree/gh-pages/demo-source>

## LICENSE

MIT
