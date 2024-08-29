import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/user/Login.vue'
import Home from '../views/user/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Home',
      name: 'homepage',
      component:Home
    },
    {
      path: '/',
      name: 'login',
     component:Login
    },

  ]
})

export default router
