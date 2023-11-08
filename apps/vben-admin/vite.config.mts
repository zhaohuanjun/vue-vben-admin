import { defineApplicationConfig } from '@vben/vite-config';

export default defineApplicationConfig({
  overrides: {
    optimizeDeps: {
      include: ['ant-design-vue/es/locale/zh_CN'],
    },
    server: {
      proxy: {
        '/vben-api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/vben-api/, ''),
        },
      },
    },
  },
});
