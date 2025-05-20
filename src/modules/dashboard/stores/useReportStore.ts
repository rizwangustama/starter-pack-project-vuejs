import { defineStore } from "pinia";

export const useReportStore = defineStore("report", {
  state: () => ({
    reportData: null,
    loading: false,
  }),
  actions: {
    async fetchReportData() {
      this.loading = true;
      try {
        const response = await fetch("/api/report");
        this.reportData = await response.json();
      } catch (error) {
        console.error("Failed to fetch report data:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});