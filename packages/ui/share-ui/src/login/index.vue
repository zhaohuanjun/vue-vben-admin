<script setup lang="ts">
  import { createNamespace } from '@vben/toolkit';
  import { computed } from 'vue';

  import Logo from '../logo/index.vue';
  import loginBgSvg from './login-bg.svg';
  // import loginBgDarkSvg from './login-bg-dark.svg';
  import loginSloganSvg from './login-slogan.svg';

  defineOptions({
    name: 'LoginPage',
  });

  interface Props {
    /**
     * @description 应用名
     */
    appName: string;
    /**
     * @description 介绍标题
     */
    title: string;
    /**
     * @description 描述
     */
    description: string;
    /**
     * @description logo图片
     */
    logo: string;
  }

  withDefaults(defineProps<Props>(), {});

  const { b, e } = createNamespace('login');

  // TODO: 黑暗模式
  const loginBackagroundImage = computed(() => {
    return `url(${loginBgSvg})`;
  });
</script>

<template>
  <div :class="b()">
    <div :class="e('header')" class="-enter-x">
      <Logo :src="logo" :text="appName" :text-size="26" theme="dark" />
    </div>

    <div :class="e('slogan')">
      <div :class="e('content')">
        <img :alt="appName" :src="loginSloganSvg" class="-enter-x w-2/5" />
        <div :class="e('title')" class="-enter-x">
          {{ title }}
        </div>
        <div :class="e('desc')" class="-enter-x">
          {{ description }}
        </div>
      </div>
    </div>
    <div :class="e('form')">
      <slot name="form" class="w-1/2"></slot>
    </div>
  </div>
</template>

<style lang="scss" module scoped>
  @include b('login') {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 100%;
    background: #fff;

    @include e('header') {
      position: absolute;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100px;
      padding: 0 100px;
      text-align: left;
      cursor: pointer;
    }

    @include e('slogan') {
      flex: 1;
      height: 100%;
      background-image: v-bind('loginBackagroundImage');
      background-repeat: no-repeat;
      background-position: 100%;
      background-size: auto 100%;
    }

    @include e('content') {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    @include e('title') {
      margin: 50px 0 0;
      font-size: 28px;
      color: #fff;
    }

    @include e('desc') {
      margin-top: 16px;
      font-size: 14px;
      color: #fff;
    }

    @include e('form') {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
    }
  }
</style>
