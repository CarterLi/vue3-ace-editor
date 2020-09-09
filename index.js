import ace from 'ace-builds';
import 'ace-builds/webpack-resolver';
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
            if (typeof this.$.vnode.props[eventName] === 'function') {
                editor.on(x, this.$emit.bind(this, x));
            }
        });
        this._ro = new ResizeObserver(([entry]) => editor.resize());
        this._ro.observe(this.$el);
        this.$emit('init', editor);
    },
    beforeUnmount() {
        this._ro?.disconnect();
        this._editor?.destroy();
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
    },
    watch: {
        value(val) {
            if (this._contentBackup !== val) {
                this._editor.setValue(val, 1);
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
    }
});
//# sourceMappingURL=index.js.map