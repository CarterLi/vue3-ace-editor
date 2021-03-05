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
    minLines: NumberConstructor;
    maxLines: NumberConstructor;
}, unknown, unknown, {}, {
    focus(this: VAceEditorInstance): void;
    blur(this: VAceEditorInstance): void;
    selectAll(this: VAceEditorInstance): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value: string;
    lang: string;
    theme: string;
    readonly: boolean;
    wrap: boolean;
    printMargin: number | boolean;
} & {
    options?: Record<string, any> | undefined;
    placeholder?: string | undefined;
    minLines?: number | undefined;
    maxLines?: number | undefined;
}>, {
    lang: string;
    theme: string;
    readonly: boolean;
    wrap: boolean;
    printMargin: number | boolean;
}>;
