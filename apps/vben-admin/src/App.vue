<script lang="ts" setup>
  import 'dayjs/locale/zh-cn';

  import { usePreference } from '@vben/preference';
  import { ConfigProvider, theme } from 'ant-design-vue';
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  import dayjs from 'dayjs';
  import { computed } from 'vue';

  defineOptions({ name: 'App' });

  dayjs.locale(zhCN.locale);

  const { setPreference, ...preference } = usePreference();

  const algorithm = computed(() => {
    const { dark, compact } = preference;
    console.log(111, preference);

    const algorithms = dark ? [theme.darkAlgorithm] : [theme.defaultAlgorithm];

    if (compact) {
      algorithms.push(theme.compactAlgorithm);
    }
    console.log(222, algorithms);

    return algorithms;
  });

  function change() {
    setPreference({
      dark: !preference.dark.value,
    });
    console.log(2, preference.dark);
  }
</script>

<template>
  <ConfigProvider
    :locale="zhCN"
    :theme="{
      algorithm,
      token: {
        colorPrimary: preference.colorPrimary,
      },
    }"
  >
    <button @click="change">change</button>
    <RouterView />
  </ConfigProvider>
</template>
