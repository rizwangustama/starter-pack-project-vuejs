import type { RouteRecordRaw } from "vue-router";

export const portalRoutes: RouteRecordRaw[] = [
  {
    path: '/portal',
    component: () => import('@layouts/AuthLayout.vue'),
    name: 'Portal',
    children: [
      {
        path: '',
        name: 'DefaultPortal',
        component: () => import('@/modules/portal/view/Home.vue'),
      },
       {
        path: 'about',
        name: 'About',
        component: () => import('@/modules/portal/view/About.vue'),
      }
    ]
  }
]