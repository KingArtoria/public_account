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
const Success2 = () => import('../views/vip/success.vue')
const Details = () => import('../views/info/index.vue')
const Function = () => import('../views/introduce/function.vue')
const Publish = () => import('../views/introduce/publish.vue')
const Guarantee = () => import('../views/introduce/guarantee.vue')
const Public = () => import('../views/introduce/public.vue')
const Item = () => import('../views/index/item_list.vue')
const routes = [
  { path: '/', name: 'Index', redirect: '/vip', component: Vip },
  { path: '/info', name: 'Info', component: Info },
  { path: '/vip', name: 'Vip', component: Vip },
  { path: '/user', name: 'User', component: User },
  { path: '/register', name: 'Register', component: Register },
  { path: '/success', name: 'Success', component: Success },
  { path: '/success_vip', name: 'Success2', component: Success2 },
  { path: '/details', name: 'Details', component: Details },
  { path: '/function', name: 'Function', component: Function },
  { path: '/publish', name: 'Publish', component: Publish },
  { path: '/guarantee', name: 'Guarantee', component: Guarantee },
  { path: '/public', name: 'Public', component: Public },
  { path: '/item', name: 'Item', component: Item },
]

const router = new VueRouter({ routes, mode: 'history' })
export default router
