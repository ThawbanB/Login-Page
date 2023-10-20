import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginVue.vue'
import Register from '../views/RegisterVue.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: Register
    },
  ]
})

export default router
