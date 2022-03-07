import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../routes/Index.vue'
import ExerciceList from '../routes/ExerciceListPage.vue'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/exercices',
        name: 'Exercices',
        component: ExerciceList
    },
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/',
        name: 'Index',
        component: Index
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
