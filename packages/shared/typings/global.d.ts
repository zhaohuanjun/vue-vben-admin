import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 标题名称
     */
    title: string;
    /**
     * 忽略权限，直接可以访问
     * @default false
     */
    ignoreAccess?: boolean;
    /**
     * 需要特定的角色标识才可以访问
     * @default []
     */
    authority?: string[];
    /**
     * 用于路由->菜单排序
     */
    orderNo?: number;
    /**
     * 图标（菜单/tab）
     */
    icon?: string;
  }
}
