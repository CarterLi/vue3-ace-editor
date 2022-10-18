<template>
  <section
    :class="[!node.children?.length && 'empty', states.open ? 'open' : 'closed', className?.(node, depth)]"
    :style="`--depth: ${depth}`"
    :data-depth="depth"
  >
    <header>
      <i @click="states.open = !states.open" />
      <a v-text="node.text" @click="$emit('click-title', node)" />
    </header>
    <template v-if="states.open">
      <OutlineNode
        v-for="child of node.children"
        :key="child.range.start.row"
        :node="child"
        :depth="depth + 1"
        :className="className"
        @click-title="$emit('click-title', $event)"
      />
    </template>
  </section>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';

import { OutlineFoldNodeModel } from './OutlineFoldNode';

withDefaults(
  defineProps<{
    node: OutlineFoldNodeModel;
    depth?: number;
    className?: (node: OutlineFoldNodeModel, depth: number) => string;
  }>(),
  { depth: 0 },
);

defineEmits<{
  (event: 'click-title', node: OutlineFoldNodeModel): void;
}>();

const states = reactive({
  open: true,
});
</script>
<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  line-height: var(--line-height, 1.5);

  &.open > header > i {
    list-style-type: disclosure-open;
  }
  &.empty > header > i {
    visibility: hidden;
  }

  .active > header {
    background: var(--active-bg, #ffc);
  }
}

header {
  cursor: pointer;
  display: flex;
  align-items: baseline;
  position: sticky;
  top: calc(var(--depth) * var(--line-height, 1.5) * 1em);
  background: white;
  z-index: calc(100 - var(--depth));
  padding-left: calc(var(--start-padding, 5px) + var(--depth) * var(--level-padding, 15px));
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;

  &:hover {
    background: var(--hover-bg, #f5f5f5);
  }

  i {
    display: list-item;
    list-style: inside disclosure-closed;
  }

  a {
    flex: 1;
  }
}
</style>
