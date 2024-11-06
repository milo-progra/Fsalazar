import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import sobreMiView from '@/views/sobreMiView.vue'
import skillsView from '@/views/skillsView.vue'
import contactView from '@/views/contactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sobre_mi',
      name: 'sobre_mi',
      component: sobreMiView
    },
    {
      path: '/skills',
      name: 'skills',
      component: skillsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: contactView
    },


  ]
})

export default router
