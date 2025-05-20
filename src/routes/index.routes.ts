import { createWebHistory, createRouter } from 'vue-router';
import dashboardModule from '@/modules/dashboard/dashboard.module';
import portalModule from '@/modules/portal/portal.module';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...dashboardModule.routes,
    ...portalModule.routes,
  ],
})

export default router;