import { createApp } from 'vue'
import '../style.css'
// import '../assets/styles/style.css'

// Components
import App from '../App.vue'

// Plugins
import { registerPlugins } from './plugins'

// Initialize the app
const app = createApp(App)
registerPlugins(app)
app.mount('#app')
