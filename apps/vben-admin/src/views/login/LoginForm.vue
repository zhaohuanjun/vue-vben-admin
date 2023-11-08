<script setup lang="ts">
  import { useRequest } from '@vben/hooks';
  import { useAccessStore } from '@vben/store';
  import { Button, Checkbox, Form, Input } from 'ant-design-vue';
  import type { Rule } from 'ant-design-vue/es/form';
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';

  import { getUserInfo, type UserApi, userLogin } from '@/services';

  defineOptions({ name: 'LoginForm' });

  const useForm = Form.useForm;

  const formModel = reactive<UserApi.LoginParams & { rememberMe: boolean }>({
    username: 'vben',
    password: '123456',
    rememberMe: false,
  });

  const formRules = reactive<Record<string, Rule[]>>({
    username: [
      {
        required: true,
        message: '请输入用户名',
      },
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
      },
    ],
  });

  const router = useRouter();
  const accessStore = useAccessStore();
  const { validate, validateInfos } = useForm(formModel, formRules);

  const { loading, runAsync: runUserLogin } = useRequest(userLogin, { manual: true });
  const { loading: userInfoLoading, runAsync: runGetUserInfo } = useRequest(getUserInfo, {
    manual: true,
  });

  /**
   * 登录逻辑
   * @param e
   */
  async function handleLogin(e: MouseEvent) {
    e?.preventDefault();

    const values = await validate();
    if (!values) {
      return;
    }
    const { accessToken } = await runUserLogin(values);
    if (accessToken) {
      accessStore.setAccessToken(accessToken);
      const userInfo = await runGetUserInfo();
      accessStore.setUserInfo(userInfo);
      router.push(userInfo.homePath);
    }
  }
</script>

<template>
  <Form class="enter-x w-1/2">
    <Form.Item v-bind="validateInfos.username" class="enter-x">
      <Input v-model:value="formModel.username" size="large" placeholder="用户名" />
    </Form.Item>
    <Form.Item v-bind="validateInfos.password" class="enter-x">
      <Input.Password v-model:value="formModel.password" size="large" placeholder="密码" />
    </Form.Item>
    <div class="enter-x flex">
      <Form.Item v-bind="validateInfos.rememberMe" class="flex-1">
        <Checkbox v-model:checked="formModel.rememberMe">记住我</Checkbox>
      </Form.Item>
      <Form.Item class="flex-1 text-right">
        <Button type="link">忘记密码</Button>
      </Form.Item>
    </div>
    <Form.Item class="enter-x">
      <Button
        type="primary"
        size="large"
        :loading="loading || userInfoLoading"
        block
        @click="handleLogin"
      >
        登录
      </Button>
    </Form.Item>
  </Form>
</template>
