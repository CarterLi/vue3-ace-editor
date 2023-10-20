import ace, { type Ace } from 'ace-builds';
import { capitalize, defineComponent, markRaw, h } from 'vue';
import ResizeObserver from 'resize-observer-polyfill';

import type { VAceEditorInstance } from './types';

const Events = [
  'blur',
  'input',
  'change',
  'changeSelectionStyle',
  'changeSession',
  'copy',
  'focus',
  'paste',
];

export const VAceEditor = defineComponent({
  name: 'VAceEditor',
  props: {
    value: {
      type: String,
      required: true,
    },
    lang: {
      type: String,
      default: 'text',
    },
    theme: {
      type: String,
      default: 'chrome',
    },
    options: Object,
    placeholder: String,
    readonly: Boolean,
    wrap: Boolean,
    printMargin: {
      type: [Boolean, Number],
      default: true,
    },
    minLines: Number,
    maxLines: Number,
  },
  emits: ['update:value', 'init', ...Events],
  render(this: VAceEditorInstance) {
    return h('div');
  },
  mounted(this: VAceEditorInstance) {
    const editor = this._editor = markRaw(ace.edit(this.$el, {
      placeholder: this.placeholder,
      readOnly: this.readonly,
      value: this.value,
      mode: 'ace/mode/' + this.lang,
      theme: 'ace/theme/' + this.theme,
      wrap: this.wrap,
      printMargin: this.printMargin,
      useWorker: false,
      minLines: this.minLines,
      maxLines: this.maxLines,
      ...this.options,
    }));
    this._contentBackup = this.value;
    this._isSettingContent = false;
    editor.on('change', () => {
      // ref: https://github.com/CarterLi/vue3-ace-editor/issues/11
      if (this._isSettingContent) return;
      const content = editor.getValue();
      this._contentBackup = content;
      this.$emit('update:value', content);
    });
    Events.forEach(x => {
      const eventName = 'on' + capitalize(x);
      if (typeof this.$.vnode.props![eventName] === 'function') {
        editor.on(x as any, this.$emit.bind(this, x));
      }
    });
    this._ro = new ResizeObserver(() => editor.resize());
    this._ro.observe(this.$el);
    this.$emit('init', editor);
  },
  beforeUnmount(this: VAceEditorInstance) {
    this._ro?.disconnect();
    this._editor?.destroy();
  },
  methods: {
    focus(this: VAceEditorInstance) {
      this._editor.focus();
    },
    blur(this: VAceEditorInstance) {
      this._editor.blur();
    },
    selectAll(this: VAceEditorInstance) {
      this._editor.selectAll();
    },
    getAceInstance(this: VAceEditorInstance) {
      return this._editor;
    },
  },
  watch: {
    value(this: VAceEditorInstance, val: string) {
      if (this._contentBackup !== val) {
        try {
          this._isSettingContent = true;
          this._editor.setValue(val, 1);
        } finally {
          this._isSettingContent = false;
        }
        this._contentBackup = val;
      }
    },
    theme(this: VAceEditorInstance, val: string) {
      this._editor.setTheme('ace/theme/' + val);
    },
    options(this: VAceEditorInstance, val: Partial<Ace.EditorOptions>) {
      this._editor.setOptions(val);
    },
    readonly(this: VAceEditorInstance, val: boolean) {
      this._editor.setReadOnly(val);
    },
    placeholder(this: VAceEditorInstance, val: string) {
      this._editor.setOption('placeholder', val);
    },
    wrap(this: VAceEditorInstance, val: boolean) {
      this._editor.setWrapBehavioursEnabled(val);
    },
    printMargin(this: VAceEditorInstance, val: boolean | number) {
      this._editor.setOption('printMargin', val);
    },
    lang(this: VAceEditorInstance, val: string) {
      this._editor.setOption('mode', 'ace/mode/' + val);
    },
    minLines(this: VAceEditorInstance, val: number) {
      this._editor.setOption('minLines', val);
    },
    maxLines(this: VAceEditorInstance, val: number) {
      this._editor.setOption('maxLines', val);
    },
  }
});
