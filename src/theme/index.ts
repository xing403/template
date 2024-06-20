import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/theme-chalk/display.css'
import type { App } from 'vue'

export default function theme(app: App) {
  app.use(ElementPlus)
}
