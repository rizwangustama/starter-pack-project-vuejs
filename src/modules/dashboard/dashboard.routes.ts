import type { RouteRecordRaw } from "vue-router";

export const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: () => import('@layouts/DashboardLayout.vue'),
    name: 'Dashboard',
    children: [
      {
        path: '',
        name: 'Overviews',
        component: () => import('@/modules/dashboard/view/Overviews.vue'),
      },
      {
        path: 'report',
        name: 'Report',
        component: () => import('@/modules/dashboard/view/Report.vue'),
      },
      {
        path: 'report/:id',
        name: 'ReportId',
        component: () => import('@/modules/dashboard/view/Report.vue'),
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('@/modules/dashboard/view/Users.vue'),
      }
    ]
  }
]