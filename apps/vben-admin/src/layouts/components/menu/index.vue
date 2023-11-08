<script lang="ts" setup>
  import { Menu } from '@vben/antv-ui';
  import { useAccessStore } from '@vben/store';
  import { computed, watch } from 'vue';

  import { useMenuState } from './useMenuState';

  interface Props {
    collapsed?: boolean;
  }
  defineOptions({ name: 'LayoutMenu' });

  const emit = defineEmits<{ 'update:collapsed': [value: boolean] }>();

  const props = withDefaults(defineProps<Props>(), {
    collapsed: false,
  });

  const accessStore = useAccessStore();

  const menus = computed(() => accessStore.getAccessMenus);

  const { selectedKeys, openKeys, updateCollapsed, collapsed: menuCollapsed } = useMenuState();

  watch(
    () => props.collapsed,
    (value) => {
      updateCollapsed(value);
    },
  );

  watch(menuCollapsed, (value) => {
    emit('update:collapsed', value);
  });
</script>

<template>
  <Menu
    v-model:open-keys="openKeys"
    v-model:selected-keys="selectedKeys"
    :collapsed="menuCollapsed"
    :menus="menus"
    class="h-full"
  />
</template>
