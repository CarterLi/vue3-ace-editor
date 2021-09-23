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
    value?: unknown;
    lang?: unknown;
    theme?: unknown;
    options?: unknown;
    placeholder?: unknown;
    readonly?: unknown;
    wrap?: unknown;
    printMargin?: unknown;
    minLines?: unknown;
    maxLines?: unknown;
} & {
    value: string;
    theme: string;
    readonly: boolean;
    wrap: boolean;
    printMargin: number | boolean;
    lang: string;
} & {
    options?: Record<string, any> | undefined;
    placeholder?: string | undefined;
    minLines?: number | undefined;
    maxLines?: number | undefined;
}> & {
    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
}, {
    theme: string;
    readonly: boolean;
    wrap: boolean;
    printMargin: number | boolean;
    lang: string;
}>;
