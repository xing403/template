import routes from 'virtual:generated-pages'
import { createRouter, createWebHistory } from 'vue-router'
import pkj from '../../package.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  useTitle(pkj.name ?? '未命名')
  next()
})

export default router
