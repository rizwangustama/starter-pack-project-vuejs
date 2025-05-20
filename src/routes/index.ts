import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router';

// Define the routes for the application
const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: () => import('../layouts/DashboardLayout.vue'),
    name: 'Dashboard',
    children: [
      {
        path: '/',
        name: 'Auth',
        component: () => import('../components/Auth.vue'),
      },
      {
        path: 'about',
        name: 'DashboardAbout',
        component: () => import('@/components/About.vue'),
      }
    ]
  },
  {
    path: '/auth',
    name: 'LoginAuth',
    component: () => import('../layouts/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('../components/Auth.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;