import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// * 路由懒加载
const Index = () => import('../views/index/index.vue')
const Info = () => import('../views/index/info.vue')
const Vip = () => import('../views/vip/index.vue')
const User = () => import('../views/user/index.vue')
const Register = () => import('../views/user/register.vue')
const Success = () => import('../views/user/success.vue')
const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/info', name: 'Info', component: Info },
  { path: '/vip', name: 'Vip', component: Vip },
  { path: '/user', name: 'User', component: User },
  { path: '/register', name: 'Register', component: Register },
  { path: '/success', name: 'Success', component: Success },
]

const router = new VueRouter({ routes, mode: 'history' })
export default router
