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
    <v-ace-editor v-model="content" @init="editorInit" lang="html" theme="chrome" />
    ```

    prop `v-model`  is required

    prop `lang`, `theme` is same as [ace-editor's doc](https://github.com/ajaxorg/ace)

## Deferences with [vue2-ace-editor](https://github.com/chairuosen/vue2-ace-editor)

1. This component uses [ace-builds](https://www.npmjs.com/package/ace-builds) directly, instead of the outdated wrapper [brace](https://www.npmjs.com/package/brace)
1. Ace modes and themes are automatically resolved using `ace-builds/webpack-resolver`, no manual-import required.
1. DOM size changes are detected automatically using [ResizeObserver](resize-observer-polyfill), thus no `width` / `height` props needed.
1. For easier usage, more props / events added / emitted.
    1. Prop `readonly`: This Boolean attribute indicates that the user cannot modify the value of the control.
    1. Prop `placeholder`: A hint to the user of what can be entered in the control.
    1. All ace events emitted. Docs can be found here: <https://ace.c9.io/#api=editor&nav=api>
    1. Some commonly used methods `focus`, `blur`, `selectAll` provided as shortcuts.

## LICENSE

MIT
