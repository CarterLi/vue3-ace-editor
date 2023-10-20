import ace from 'ace-builds';
import { capitalize, defineComponent, markRaw, h } from 'vue';
import ResizeObserver from 'resize-observer-polyfill';
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
    render() {
        return h('div');
    },
    mounted() {
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
            if (this._isSettingContent)
                return;
            const content = editor.getValue();
            this._contentBackup = content;
            this.$emit('update:value', content);
        });
        Events.forEach(x => {
            const eventName = 'on' + capitalize(x);
            if (typeof this.$.vnode.props[eventName] === 'function') {
                editor.on(x, this.$emit.bind(this, x));
            }
        });
        this._ro = new ResizeObserver(() => editor.resize());
        this._ro.observe(this.$el);
        this.$emit('init', editor);
    },
    beforeUnmount() {
        var _a, _b;
        (_a = this._ro) === null || _a === void 0 ? void 0 : _a.disconnect();
        (_b = this._editor) === null || _b === void 0 ? void 0 : _b.destroy();
    },
    methods: {
        focus() {
            this._editor.focus();
        },
        blur() {
            this._editor.blur();
        },
        selectAll() {
            this._editor.selectAll();
        },
        getAceInstance() {
            return this._editor;
        },
    },
    watch: {
        value(val) {
            if (this._contentBackup !== val) {
                try {
                    this._isSettingContent = true;
                    this._editor.setValue(val, 1);
                }
                finally {
                    this._isSettingContent = false;
                }
                this._contentBackup = val;
            }
        },
        theme(val) {
            this._editor.setTheme('ace/theme/' + val);
        },
        options(val) {
            this._editor.setOptions(val);
        },
        readonly(val) {
            this._editor.setReadOnly(val);
        },
        placeholder(val) {
            this._editor.setOption('placeholder', val);
        },
        wrap(val) {
            this._editor.setWrapBehavioursEnabled(val);
        },
        printMargin(val) {
            this._editor.setOption('printMargin', val);
        },
        lang(val) {
            this._editor.setOption('mode', 'ace/mode/' + val);
        },
        minLines(val) {
            this._editor.setOption('minLines', val);
        },
        maxLines(val) {
            this._editor.setOption('maxLines', val);
        },
    }
});
//# sourceMappingURL=index.js.map