import { dashboardRoutes } from "./dashboard.routes";
import { useOverviewStore } from "./stores/useOverviewStore";
import { useReportStore } from "./stores/useReportStore";
import { useUserStore } from "./stores/useUserStore";

export default {
  name: 'DashboardModule',
  routes: dashboardRoutes,
  stores: [
    useOverviewStore,
    useReportStore,
    useUserStore
  ]
}