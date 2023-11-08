import type { RouteRecordRaw } from 'vue-router';

const Layout = () => import('@/layouts/index.vue');

/** 静态路由列表，访问这些页面可以不需要权限 */
const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/redirect',
    name: 'Redirect',
    component: () => import('@vben/share-ui').then((m) => m.Redirect),
    meta: {
      title: 'Redirect',
    },
  },
  {
    path: '/:path(.*)*',
    name: 'NotFound',
    component: () => import('@vben/share-ui').then((m) => m.NotFound),
    meta: {
      title: 'NotFound',
    },
  },
  //
];

/** 动态路由 */
const dynamicRoutes: RouteRecordRaw[] = [
  // 根路由
  {
    path: '/',
    name: 'Dashboard',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: 'Dashboard',
        },
      },
    ],
  },
  {
    path: '/test',
    name: 'Test',
    component: Layout,
    children: [
      {
        path: '/test1',
        name: 'Test1',
        component: () => import('@/views/test/test1.vue'),
        meta: {
          title: 'Test1',
        },
      },
      {
        path: '/test2',
        name: 'Test2',
        component: () => import('@/views/test/test2.vue'),
        meta: {
          title: 'Test2',
        },
      },
      {
        path: '/test3',
        name: 'Test3',
        meta: {
          title: 'Test3',
        },
        children: [
          {
            path: '/test31',
            name: 'Test31',
            component: () => import('@/views/test/test3.vue'),
            meta: {
              title: 'Test31',
            },
          },
        ],
      },
    ],
  },
];

/** 排除在主框架外的路由，这些路由没有菜单和顶部及其他框架内容 */
const externalRoutes: RouteRecordRaw[] = [];

export { dynamicRoutes, externalRoutes, staticRoutes };
