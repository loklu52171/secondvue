import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import Shop from '../components/shop/shop'
import Discount from '../components/discount/discount'
import Personal from '../components/personal/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/discount',
      component: Discount
    },
    {
      path: '/personal',
      component: Personal
    }
  ]
})
