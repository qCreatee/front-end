import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import RegistrationPage from '../components/RegistrationPage.vue'

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegistrationPage },
  { path: '/', redirect: '/login' } 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router