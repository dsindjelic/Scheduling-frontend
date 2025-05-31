import { createRouter, createWebHistory } from 'vue-router'
import schedulingClient from '../components/schedulingClient.vue'

const routes = [
  { path: '/', component: schedulingClient },
  // ... ostale rute
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router