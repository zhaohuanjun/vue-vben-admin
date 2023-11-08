import type { UserInfo } from '@vben/typings';

import { request } from '@/services/request';

import type { UserApi } from './typing';

/**
 * 登录
 */
async function userLogin(data: UserApi.LoginParams) {
  return request<UserApi.LoginResult>('/login', { data, method: 'POST' });
}

/**
 * 获取用户信息
 */
async function getUserInfo() {
  return request<UserInfo>('/getUserInfo', { method: 'GET' });
}

export { getUserInfo, userLogin };

export type { UserApi } from './typing';
