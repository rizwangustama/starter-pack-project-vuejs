import type { RouteRecordRaw } from "vue-router";

export const dashboardRoutes: RouteRecordRaw = {
    path: '/dashboard',
    component: () => import('@/layouts/DashboardLayout.vue'),
    name: 'Dashboard',
    children: [
      {
        path: '',
        name: 'Auth',
        component: () => import('@/components/Auth.vue'),
      },
      {
        path: 'about',
        name: 'DashboardAbout',
        component: () => import('@/components/About.vue'),
      }
    ]
  }