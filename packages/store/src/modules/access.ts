import type { MenuRecordRaw, UserInfo } from '@vben/typings';
import { acceptHMRUpdate, defineStore } from 'pinia';
import type { RouteRecordRaw } from 'vue-router';

type AccessToken = string | null;

interface AccessState {
  /**
   * 登录 accessToken
   */
  accessToken: AccessToken;
  /**
   * 可访问的路由列表
   */
  accessRoutes: RouteRecordRaw[];
  /**
   * 可访问的菜单列表
   */
  accessMenus: MenuRecordRaw[];
  /**
   * 用户角色
   */
  userRoles: string[];
  /**
   * 用户信息
   */
  userInfo: UserInfo | null;
}

/**
 * @description 访问权限相关
 */
const useAccessStore = defineStore('access', {
  persist: {
    // 持久化
    // TODO: accessToken 过期时间
    paths: ['accessToken', 'userRoles', 'userInfo'],
  },
  state: (): AccessState => ({
    accessToken: null,
    userRoles: [],
    userInfo: null,
    accessMenus: [],
    accessRoutes: [],
  }),
  getters: {
    getAccessToken(): AccessToken {
      return this.accessToken;
    },
    getUserRoles(): string[] {
      return this.userRoles;
    },
    getUserInfo(): UserInfo | null {
      return this.userInfo;
    },
    getAccessRoutes(): RouteRecordRaw[] {
      return this.accessRoutes;
    },
    getAccessMenus(): MenuRecordRaw[] {
      return this.accessMenus;
    },
  },
  actions: {
    setAccessToken(token: AccessToken) {
      this.accessToken = token;
    },
    setAccessRoutes(routes: RouteRecordRaw[]) {
      this.accessRoutes = routes;
    },
    setAccessMenus(menus: MenuRecordRaw[]) {
      this.accessMenus = menus;
    },
    setUserRoles(roles: string[]) {
      this.userRoles = roles;
    },
    setUserInfo(userInfo: UserInfo) {
      // 设置用户信息
      this.userInfo = userInfo;
      // 设置角色信息
      const roles = userInfo?.roles ?? [];
      const roleValues = roles.map((item) => item.value);
      this.setUserRoles(roleValues);
    },
  },
});

// 解决热更新问题
const hot = import.meta.hot;
if (hot) {
  hot.accept(acceptHMRUpdate(useAccessStore, hot));
}

export { useAccessStore };
