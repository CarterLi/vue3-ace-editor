import { ComponentPublicInstance } from 'vue';
import type { Ace } from 'ace-builds';

export interface VAceEditorPrivate {
  _editor: Ace.Editor;
  _contentBackup: string;
  _ro: ResizeObserver;
}

export interface VAceEditorProps {
  readonly value: string;
  readonly lang: string;
  readonly theme: string;
  readonly options: Partial<Ace.EditorOptions>;
  readonly placeholder: string;
  readonly readonly: boolean;
  readonly wrap: boolean;
  readonly printMargin: boolean | number;
}

export interface VAceEditorMethods {
  focus(): void;
  blur(): void;
  selectAll(): void;
}

export interface VAceEditorInstance extends
  ComponentPublicInstance,
  VAceEditorPrivate,
  VAceEditorProps,
  VAceEditorMethods {}
