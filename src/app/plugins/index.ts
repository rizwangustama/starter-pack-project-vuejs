import type { App } from "vue";
import router from "../routes/index.routes";
import pinia from "../stores/index"
import vuetify from "./vuetify";
export function registerPlugins (app: App) {
  app.use(router)
  app.use(vuetify)
  app.use(pinia)
}