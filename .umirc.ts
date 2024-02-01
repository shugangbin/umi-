import { ForwardOutlined } from '@ant-design/icons';
import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
    
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: './index',
      layout:false,

    },
    { path: '/*', component: '@/pages/404' },
    {
      name: 'login',
      path: '/login',
      component: './Login',
      layout:false,
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      routes: [
        { path: 'access', component: '@/pages/Access' },
      ],
   
    },
   
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'yarn',
});

