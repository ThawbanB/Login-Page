import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginVue.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
  ]
})

export default router
