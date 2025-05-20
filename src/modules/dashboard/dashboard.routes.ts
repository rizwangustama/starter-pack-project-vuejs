import { defineAsyncComponent } from "vue";
import type { RouteRecordRaw } from "vue-router";

export const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: defineAsyncComponent(() => import('@layouts/DashboardLayout.vue')),
    name: 'Dashboard',
    children: [
      {
        path: '',
        name: 'Overviews',
        component: defineAsyncComponent(() => import('@/modules/dashboard/view/Overviews.vue')),
      },
      {
        path: 'report',
        name: 'Report',
        component: defineAsyncComponent (() => import('@/modules/dashboard/view/Report.vue')),
      },
      {
        path: 'report/:id',
        name: 'Report',
        component: defineAsyncComponent (() => import('@/modules/dashboard/view/Report.vue')),
      },
      {
        path: 'users',
        name: 'Users',
        component: defineAsyncComponent (() => import('@/modules/dashboard/view/Users.vue')),
      }
    ]
  }
]