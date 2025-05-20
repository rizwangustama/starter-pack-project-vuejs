import { createMemoryHistory, createRouter, type RouteRecordRaw } from 'vue-router';

// Define the routes for the application
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../components/HelloWorld.vue'),
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;