import { createRouter, createWebHistory } from 'vue-router'
import ServiceTable from '@service-catalog/components/ServiceTable.component.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/services'
    },
    {
      path: '/services',
      name: 'services',
      component: ServiceTable
    }
  ]
})

export default router
