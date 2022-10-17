<template>
  <details :class="[!node.children?.length && 'empty', className?.(node, depth)]" :style="`--depth: ${depth}`" open>
    <summary v-text="node.text" @mouseenter="$emit('enter-title', node)" @mouseleave="$emit('leave-title', node)" />
    <Outline
      v-for="child of node.children"
      :key="child.range.start.row"
      :node="child"
      :depth="depth + 1"
      :className="className"
      @enter-title="$emit('enter-title', $event)"
      @leave-title="$emit('leave-title', $event)"
    />
  </details>
</template>
<script lang="ts" setup>
import type { Ace } from 'ace-builds';

interface FoldNode {
  range: Ace.Range;
  text: string;
  children: FoldNode[];
  parent: FoldNode;
}

withDefaults(
  defineProps<{
    node: FoldNode;
    depth?: number;
    className?: (node: FoldNode, depth: number) => string;
  }>(),
  { depth: 0 },
);

defineEmits<{
  (event: 'enter-title', node: FoldNode): void;
  (event: 'leave-title', node: FoldNode): void;
}>();
</script>
<style lang="scss" scoped>
$start-padding: 5px;
details {
  display: flex;
  flex-direction: column;
  line-height: 1.5;

  &.empty > summary {
    list-style: none;
    padding-left: calc($start-padding + var(--depth) * 15px + 14px);
  }
}

summary {
  cursor: pointer;
  position: sticky;
  top: calc(var(--depth) * 1.5em);
  background: white;
  z-index: calc(100 - var(--depth));
  padding-left: calc($start-padding + var(--depth) * 15px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}
</style>
