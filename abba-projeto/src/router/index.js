import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/inicio',
    name: 'inicio',
    component: function () {
      return import('../views/InicioView.vue')
    }
  },
  {
    path: '/cultos',
    name: 'cultos',
    component: function () {
      return import('../views/CultosView.vue')
    }
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: function () {
      return import('../views/EventosView.vue')
    }
  },
  {
    path: '/ministerios',
    name: 'ministerios',
    component: function () {
      return import('../views/MinisteriosView.vue')
    }
  },
  {
    path: '/historia',
    name: 'historia',
    component: function () {
      return import('../views/HistoriaView.vue')
    }
  },
  {
    path: '/contatos',
    name: 'contatos',
    component: function () {
      return import('../views/ContatosView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
