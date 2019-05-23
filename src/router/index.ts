import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import NavMenu from '../views/login/login.vue'

Vue.use(Router)


const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'NavMenu',
    component: resolve => require('../components/NavMenu.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  }
]


export default new Router({
  routes,
})