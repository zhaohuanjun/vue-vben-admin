import 'uno.css';
import '@vben/styles';

import { initIcons } from '@vben/icons';
import { useStore } from '@vben/store';
import { createApp } from 'vue';

import App from './App.vue';
import { router } from './router';

const app = createApp(App);

// 配置 pinia-store
useStore(app);

// 配置路由及路由守卫
app.use(router);

// 初始化图标
initIcons();

app.mount('#app');
