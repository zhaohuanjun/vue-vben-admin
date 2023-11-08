import { useAccessStore } from '@vben/store';
import { traverseTreeValues } from '@vben/toolkit';
import { computed, onBeforeMount, reactive, toRefs, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

interface State {
  collapsed: boolean;
  selectedKeys: string[];
  openKeys: string[];
}

const state = reactive<State>({
  collapsed: false,
  openKeys: [],
  selectedKeys: [],
});

/**
 * 菜单状态管理
 */
function useMenuState() {
  const router = useRouter();
  const route = useRoute();

  const accessStore = useAccessStore();

  /**
   * 获取菜单及父级菜单集合
   */
  const menuParentPathMap = computed(() => {
    const menus = accessStore.getAccessMenus;
    const map: Record<string, string[]> = {};
    traverseTreeValues(menus, (menu) => {
      map[menu.path] = menu.parents || [];
    });
    return map;
  });

  /**
   * 菜单项点击事件
   */
  watch(
    () => state.selectedKeys,
    (selectedKeys) => {
      if (!selectedKeys) {
        return;
      }
      const path = selectedKeys[selectedKeys.length - 1];

      // 变更openKeys值
      state.openKeys = getOpenKeysByPath(path);

      // 点击跳转
      router.push(path);
    },
  );

  /**
   * 获取菜单的所有父级菜单路径
   * @param path
   */
  function getOpenKeysByPath(path: string) {
    return menuParentPathMap.value?.[path];
  }

  function updateCollapsed(collapsed: boolean) {
    state.collapsed = collapsed;
  }

  onBeforeMount(() => {
    // 页面打开或者刷新后，进行赋值
    state.selectedKeys = [route.path];
  });

  return {
    ...toRefs(state),
    updateCollapsed,
  };
}

export { useMenuState };
