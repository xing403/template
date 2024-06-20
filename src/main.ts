import { createApp } from 'vue'

import router from './router'
import App from './App.vue'
import theme from './theme'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import './assets/styles/main.css'

const app = createApp(App)

theme(app)

app.use(router)
app.mount('#app')
