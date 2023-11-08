<script lang="ts" setup>
  import { DoubleLeftIcon, DoubleRightIcon } from '@vben/icons';
  import { VbenAdminLayout } from '@vben/layout';
  import { preference } from '@vben/preference';
  import { Logo } from '@vben/share-ui';
  import { reactive } from 'vue';

  import LayoutHeader from './components/header/index.vue';
  import LayoutMenu from './components/menu/index.vue';

  defineOptions({ name: 'BasicLayout' });

  const model = reactive({
    sideWidth: 210,
    sideCollapsed: false,
    layout: 'side-nav' as const,
    sideMixedExtraVisible: false,
    fixedMixedExtra: false,
    isMobile: false,
  });
</script>

<template>
  <VbenAdminLayout
    v-model:side-collapsed="model.sideCollapsed"
    v-model:mixed-extra-visible="model.sideMixedExtraVisible"
    :sideWidth="model.sideWidth"
    :layout="model.layout"
    :fixed-mixed-extra="model.fixedMixedExtra"
    :isMobile="model.isMobile"
  >
    <template #logo>
      <Logo
        :src="preference.logo"
        :collapsed="model.sideCollapsed"
        :text="preference.appName"
        theme="dark"
      />
    </template>
    <template #header>
      <LayoutHeader />
    </template>
    <template #side>
      <LayoutMenu />
    </template>
    <template #collapsed-button> <DoubleRightIcon /></template>
    <template #un-collapsed-button><DoubleLeftIcon /></template>
    <template #side-extra>side-extra</template>
    <template #content>
      <div style="height: 3000px">
        <RouterView />
      </div>
    </template>
    <template #footer>footer</template>
  </VbenAdminLayout>
</template>
