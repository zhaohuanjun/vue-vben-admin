<script setup lang="ts">
  import type { MenuRecordRaw } from '@vben/typings';
  import { Menu } from 'ant-design-vue';
  import { computed } from 'vue';

  import SubMenu from './SubMenu.vue';

  defineOptions({
    name: 'SubMenu',
  });

  interface Props {
    /**
     * 菜单项
     */
    menu: MenuRecordRaw;
  }

  const props = withDefaults(defineProps<Props>(), {});

  /**
   * 判断是否有子节点，动态渲染 menu-item/sub-menu-item
   */
  const hasChildren = computed(() => {
    const { menu } = props;
    return Reflect.has(menu, 'children') && !!menu.children && menu.children.length > 0;
  });
</script>

<template>
  <Menu.Item v-if="!hasChildren" :key="menu.path" :title="menu.name">
    {{ menu.name }}
  </Menu.Item>
  <Menu.SubMenu v-else :key="`${menu.path}`" :title="menu.name">
    <template v-for="childItem in menu.children || []" :key="childItem.path">
      <SubMenu :menu="childItem" />
    </template>
  </Menu.SubMenu>
</template>
