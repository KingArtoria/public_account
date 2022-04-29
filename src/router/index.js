import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// * 路由懒加载
const Index = () => import('../views/index/index.vue')
const Info = () => import('../views/index/info.vue')
const Vip = () => import('../views/vip/index.vue')
const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/info', name: 'Info', component: Info },
  { path: '/vip', name: 'Vip', component: Vip },
]

const router = new VueRouter({ routes, mode: 'history' })
export default router
