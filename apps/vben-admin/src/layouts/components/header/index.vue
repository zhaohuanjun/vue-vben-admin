<script lang="ts" setup>
  import { preference } from '@vben/preference';
  import { createNamespace } from '@vben/toolkit';

  import UserDropdown from './UserDropdown.vue';

  interface Props {
    /**
     * Logo 主题
     */
    theme?: string;
  }

  withDefaults(defineProps<Props>(), {
    theme: 'light',
  });

  const { b } = createNamespace('layout-header');
</script>

<template>
  <div :class="[b()]">
    <div style="margin-left: auto"></div>
    <UserDropdown :avatar="preference.defaultAvatar" :text="preference.appName" />
  </div>
</template>
<style lang="scss" module scoped>
  @include b('layout-header') {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #eee;
  }
</style>
