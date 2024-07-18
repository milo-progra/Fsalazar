import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import experienceView from '@/views/experienceView.vue'
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
      path: '/experience',
      name: 'experience',
      component: experienceView
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
