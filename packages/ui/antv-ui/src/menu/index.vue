<script setup lang="ts">
  import { createNamespace } from '@vben/toolkit';
  import type { MenuRecordRaw } from '@vben/typings';
  import type { MenuMode, MenuProps, MenuTheme } from 'ant-design-vue';
  import { Menu } from 'ant-design-vue';
  import type { Key } from 'ant-design-vue/es/_util/type';
  import type { SelectInfo } from 'ant-design-vue/es/menu/src/interface';
  import { computed } from 'vue';

  import SubMenu from './SubMenu.vue';

  defineOptions({
    name: 'Menu',
  });

  interface Props {
    /**
     * 菜单列表
     */
    menus: MenuRecordRaw[];
    /**
     * 菜单主题
     * @default light
     */
    theme?: MenuTheme;
    /**
     * 菜单模式
     * @default inline
     */
    mode?: MenuMode;
    /**
     * 菜单折叠状态
     * @default false
     */
    collapsed?: boolean;
    /**
     * 选中的菜单
     */
    selectedKeys: string[];
    /**
     * 展开的菜单
     */
    openKeys: string[];
  }

  const props = withDefaults(defineProps<Props>(), {
    theme: 'dark',
    mode: 'inline',
    collapsed: false,
  });

  const emit = defineEmits<{
    'update:selectedKeys': [key: Key[]];
    'update:openKeys': [key: Key[]];
  }>();

  const { b } = createNamespace('menu');

  const isInline = computed(() => props.mode === 'inline');

  const dynamicProps = computed((): Partial<MenuProps> => {
    const menuProps: Partial<MenuProps> = {};
    if (isInline.value) {
      menuProps.inlineCollapsed = props.collapsed;
    }
    return menuProps;
  });

  function handleOpenChange(keys: Key[]) {
    emit('update:openKeys', keys);
  }

  function handleSelect({ selectedKeys }: SelectInfo) {
    emit('update:selectedKeys', selectedKeys);
  }
</script>

<template>
  <Menu
    :open-keys="openKeys"
    :selected-keys="selectedKeys"
    :class="b()"
    :mode="mode"
    :theme="theme"
    :inline-collapsed="collapsed"
    v-bind="dynamicProps"
    @select="handleSelect"
    @open-change="handleOpenChange"
  >
    <template v-for="menu in menus" :key="menu.path">
      <SubMenu :menu="menu" />
    </template>
  </Menu>
</template>

<style module scoped lang="scss">
  // @include b('menu') {
  //   // position: relative;
  // }
</style>
