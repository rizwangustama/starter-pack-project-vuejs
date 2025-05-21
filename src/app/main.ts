import { createApp } from 'vue'
import '../style.css'
import App from '../App.vue'
import router from '../app/routes/index.routes'
import { createPinia } from 'pinia'

// Initialize the app
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
