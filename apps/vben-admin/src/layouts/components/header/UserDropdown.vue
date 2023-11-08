<script lang="ts" setup>
  import { useAccessStore } from '@vben/store';
  import { createNamespace } from '@vben/toolkit';
  import { Avatar, Dropdown, Menu, Modal } from 'ant-design-vue';
  import type { MenuInfo } from 'ant-design-vue/es/menu/src/interface';
  import { useRouter } from 'vue-router';

  interface Props {
    /**
     * 头像
     */
    avatar: string;
    /**
     * 文本
     */
    text: string;
    /**
     * 主题
     */
    theme?: string;
  }

  withDefaults(defineProps<Props>(), {
    avatar: '',
    theme: 'light',
  });

  const { b, is } = createNamespace('user-dropdown');
  const router = useRouter();
  const accessStore = useAccessStore();

  function handleConfirmLogout() {
    Modal.confirm({
      type: 'info',
      title: '温馨提醒',
      content: '是否确认退出系统?',
      onOk: logout,
    });
  }

  async function logout() {
    accessStore.$reset();
    router.replace('/login');
  }

  function handleMenuClick({ key }: MenuInfo) {
    switch (key) {
      case 'logout':
        handleConfirmLogout();
        break;
    }
  }
</script>

<template>
  <Dropdown :class="[b(), is(theme)]">
    <div>
      <Avatar :size="30" class="mr-2" :src="avatar" />
      <span class="hidden md:block"> {{ text }} </span>
    </div>

    <template #overlay>
      <Menu @click="handleMenuClick">
        <Menu.Item key="logout">退出系统</Menu.Item>
      </Menu>
    </template>
  </Dropdown>
</template>
<style lang="scss" module scoped>
  @include b('user-dropdown') {
    display: flex;
    align-items: center;
    padding: 0 12px;
    font-size: 14px;
    cursor: pointer;

    &.is-light {
      &:hover {
        background-color: #f6f6f6;
      }
    }
  }
</style>
