import type { Ace } from 'ace-builds';

export interface OutlineFoldNodeModel {
  range: Ace.Range;
  text: string;
  children: OutlineFoldNodeModel[];
  parent: OutlineFoldNodeModel;
}
