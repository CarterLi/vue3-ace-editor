import ace from 'ace-builds';
import type { Ace } from 'ace-builds';
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
      ...this.options,
    }));
    this._contentBackup = this.value;
    editor.on('change', () => {
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
  },
  watch: {
    value(this: VAceEditorInstance, val: string) {
      if (this._contentBackup !== val) {
        this._editor.setValue(val, 1);
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
  }
});
