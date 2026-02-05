import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

const routers = [
  {
    path: '/inicio',
    name: 'inicio',
    component: function () {
      return import('../views/InicioView.vue')
    }
  }
]
export default router
