import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import HomeDetail from '../components/home-detail/home-detail'
import Shop from '../components/shop/shop'
import Discount from '../components/discount/discount'
import DiscountDetail from '../components/discount-detail/discount-detail'
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
      component: Home,
      children: [
        {
          path: ':dissid',
          component: HomeDetail
        }
      ]
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/discount',
      component: Discount,
      children: [
        {
          path: ':id',
          component: DiscountDetail
        }
      ]
    },
    {
      path: '/personal',
      component: Personal
    }
  ]
})
