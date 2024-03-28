import { createRouter, createWebHistory } from 'vue-router'
import ServiceTable from '@service-catalog/components/ServiceTable.component.vue'
import LoginPage from '@iam/pages/LoginPage.vue'
import HomePage from '../public/pages/HomePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/dashboard/',
      name: 'dashboard',
      component: HomePage,
      children: [
        {
          path: 'services',
          component: ServiceTable
        }
      ]
    }
  ]
})

export default router
