import { useAccessStore } from '@vben/store';
import { filterTree, mapTree, traverseTreeValues } from '@vben/toolkit';
import type { MenuRecordRaw } from '@vben/typings';
import type { Router, RouteRecordRaw } from 'vue-router';

import { dynamicRoutes } from '../routes';

// 登录页面路由 name
const LOGIN_ROUTE_NAME = 'Login';
// 登录页面路由 path
const LOGIN_ROUTE_PATH = '/login';
// 不需要权限的页面白名单
const WHITE_ROUTE_NAMES = ['Login', 'Index'];

/**
 * 权限访问守卫配置
 * @param router
 */
function configAccessGuard(router: Router) {
  router.beforeEach(async (to, from) => {
    const accessStore = useAccessStore();
    const accessToken = accessStore.getAccessToken;

    // accessToken 检查
    if (!accessToken) {
      // 明确声明忽略权限访问权限，则可以访问
      if (to.meta.ignoreAccess) {
        return true;
      }

      // 白名单路由列表检查
      if (WHITE_ROUTE_NAMES.includes(to.name as string)) {
        return true;
      }

      // 没有访问权限，跳转登录页面
      if (to.fullPath !== LOGIN_ROUTE_PATH) {
        return {
          name: LOGIN_ROUTE_NAME,
          replace: true,
          // 携带当前跳转的页面，登录后重新跳转该页面
          // 如不需要，直接删除 query
          query: { redirect: encodeURIComponent(to.fullPath) },
        };
      }
      return to;
    }

    const accessRoutes = accessStore.getAccessRoutes;

    // 是否已经生成过动态路由
    if (accessRoutes && accessRoutes.length) {
      return true;
    }

    // 生成路由表
    // 当前登录用户拥有的角色标识列表
    const userRoles = accessStore.getUserRoles;
    const routes = await generatorRoutes(userRoles);
    // 动态添加到router实例内
    routes.forEach((route) => router.addRoute(route));

    const menus = await generatorMenus(routes, router);

    // 保存菜单信息和路由信息
    accessStore.setAccessMenus(menus);
    accessStore.setAccessRoutes(routes);
    const redirectPath = (from.query.redirect || to.path) as string;
    const redirect = decodeURIComponent(redirectPath);

    return {
      path: redirect,
      replace: true,
    };
  });
}

/**
 * 动态生成路由
 */
async function generatorRoutes(roles: string[]): Promise<RouteRecordRaw[]> {
  // 根据角色标识过滤路由表,判断当前用户是否拥有指定权限
  return filterTree(dynamicRoutes, (route) => hasAuthority(route, roles));
}

/**
 * 根据 routes 生成菜单列表
 * @param routes
 */

async function generatorMenus(routes: RouteRecordRaw[], router: Router): Promise<MenuRecordRaw[]> {
  // 获取所有router最终的path及name
  const finalRoutes = traverseTreeValues(router.getRoutes(), ({ name, path }) => {
    return {
      name,
      path,
    };
  });

  // 提取树指定结构
  const menus = mapTree<RouteRecordRaw & { parent?: string; parents?: string[] }, MenuRecordRaw>(
    routes,
    (route) => {
      // 路由表的路径写法有多种，这里从router获取到最终的path并赋值
      const matchRoute = finalRoutes.find((finalRoute) => finalRoute.name === route.name);

      // 转换为菜单结构
      const path = matchRoute?.path ?? route.path;
      const { children, meta, name: routeName } = route;
      const { title = '', orderNo, icon } = meta || {};
      const name = (title || routeName || '') as string;

      // 将菜单的所有父级和父级菜单记录到菜单项内
      if (children && children.length) {
        children.forEach((child: any) => {
          child.parents = [...(route.parents || []), path];
          child.parent = path;
        });
      }
      return {
        parents: route.parents,
        parent: route.parent,
        name,
        path,
        orderNo,
        icon,
        children: children as MenuRecordRaw[],
      };
    },
  );

  return menus;
}

/**
 * 判断路由是否有权限访问
 * @param route
 * @param roles
 */
function hasAuthority(route: RouteRecordRaw, access: string[]) {
  if (route.meta?.authority) {
    return access.some((value) => {
      return route.meta?.authority?.includes(value);
    });
  }
  return true;
}

export { configAccessGuard };
