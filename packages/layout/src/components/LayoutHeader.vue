<script setup lang="ts">
  import { createNamespace } from '@vben/toolkit';
  import type { CSSProperties } from 'vue';
  import { computed, useSlots } from 'vue';

  defineOptions({ name: 'VbenLayoutHeader' });

  interface Props {
    /**
     * 是否显示
     * @default true
     */
    show?: boolean;
    /**
     * zIndex
     * @default 0
     */
    zIndex?: number;
    /**
     * 背景颜色
     */
    backgroundColor: string;
    /**
     * 高度
     * @default 60
     */
    height?: number;
    /**
     * 宽度
     * @default 100%
     */
    width?: string;
    /**
     * 是否固定在顶部
     * @default true
     */
    fixed?: boolean;
    /**
     * 横屏
     * @default false
     */
    fullWidth?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    show: true,
    zIndex: 0,
    height: 60,
    fixed: true,
    width: '100%',
  });

  const slots = useSlots();

  const { b, e } = createNamespace('header');

  const hiddenHeaderStyle = computed((): CSSProperties => {
    const { height, show, fixed } = props;
    const heightValue = `${height}px`;
    return {
      marginTop: show ? 0 : `-${heightValue}`,
      height: heightValue,
      lineHeight: heightValue,
      display: fixed ? 'flex' : 'none',
    };
  });

  const style = computed((): CSSProperties => {
    const { backgroundColor, height, fixed, zIndex, show, fullWidth, width } = props;
    const right = !show || !fullWidth ? undefined : 0;

    return {
      position: fixed ? 'fixed' : 'static',
      marginTop: show ? 0 : `-${height}px`,
      backgroundColor,
      height: `${height}px`,
      zIndex,
      right,
      width,
    };
  });
</script>

<template>
  <div v-if="fixed" :style="hiddenHeaderStyle" :class="e('hide')"></div>
  <header :style="style" :class="b()">
    <slot v-if="slots.logo" name="logo"></slot>
    <slot></slot>
  </header>
</template>

<style scoped module lang="scss">
  @include b('header') {
    top: 0;
    display: flex;
    width: 100%;
    transition: all 0.3s ease 0s;

    @include e('hide') {
      flex: 0 0 auto;
      width: 100%;
      background: transparent;
      transition: all 0.3s ease 0s;
    }
  }
</style>
