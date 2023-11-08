<script setup lang="ts">
  import { createNamespace } from '@vben/toolkit';

  interface Props {
    /**
     * 是否收起文本
     */
    collapsed?: boolean;
    /**
     * Logo 文本
     */
    text?: string;
    /**
     * Logo 大小
     */
    textSize?: number;
    /**
     * Logo 图标
     */
    src: string;
    /**
     * Logo 跳转地址
     */
    href?: string;
    /**
     * Logo 图片大小
     */
    logoSize?: number;
    /**
     * Logo 主题
     */
    theme?: string;
  }

  withDefaults(defineProps<Props>(), {
    collapsed: false,
    text: '',
    href: '/',
    logoSize: 32,
    textSize: 16,
    theme: 'light',
  });

  const { b, e, is } = createNamespace('logo');
</script>

<template>
  <div :class="[b(), is(theme), is('collapsed', collapsed)]">
    <a :href="href" :style="{ fontSize: `${textSize}px` }">
      <img :src="src" :class="e('image')" :alt="text" :width="logoSize" :height="logoSize" />
      <template v-if="!collapsed">
        {{ text }}
      </template>
    </a>
  </div>
</template>

<style lang="scss" module scoped>
  @include b('logo') {
    display: flex;
    align-items: center;
    height: 100%;
    transition: all 0.2s ease;

    @include e('image') {
      position: relative;
      margin-right: 10px;
    }

    &.is-light {
      a {
        color: #000;
      }
    }

    &.is-dark {
      a {
        color: #fff;
      }
    }

    a {
      display: flex;
      align-items: center;
      min-width: 210px;
      height: 100%;
      padding: 0 0 0 7px;
      font-size: 1em;
      font-weight: 600;
      line-height: normal;
      // color: var(--primary-color);
      transition: all 0.5s;
    }

    &.is-collapsed {
      a {
        min-width: unset;
      }
    }
  }
</style>
