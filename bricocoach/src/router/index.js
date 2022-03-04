import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../routes/Index.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
