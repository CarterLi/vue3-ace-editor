import type { VAceEditorInstance } from './types';
export declare const VAceEditor: import("vue").DefineComponent<{
    value: {
        type: StringConstructor;
        required: true;
    };
    lang: {
        type: StringConstructor;
        default: string;
    };
    theme: {
        type: StringConstructor;
        default: string;
    };
    options: ObjectConstructor;
    placeholder: StringConstructor;
    readonly: BooleanConstructor;
    wrap: BooleanConstructor;
    printMargin: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
}, unknown, unknown, {}, {
    focus(this: VAceEditorInstance): void;
    blur(this: VAceEditorInstance): void;
    selectAll(this: VAceEditorInstance): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    printMargin: number | boolean;
    theme: string;
    value: string;
    lang: string;
} & {
    readonly?: boolean | undefined;
    wrap?: boolean | undefined;
    placeholder?: string | undefined;
    options?: Record<string, any> | undefined;
}>, {
    printMargin: number | boolean;
    theme: string;
    lang: string;
}>;
