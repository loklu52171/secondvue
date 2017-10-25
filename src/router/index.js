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
      meta: { navShow: true },
      children: [
        {
          path: ':dissid',
          component: HomeDetail,
          meta: { navShow: false }
        }
      ]
    },
    {
      path: '/shop',
      component: Shop,
      meta: { navShow: true }
    },
    {
      path: '/discount',
      component: Discount,
      meta: { navShow: true },
      children: [
        {
          path: ':id',
          component: DiscountDetail,
          meta: { navShow: false }
        }
      ]
    },
    {
      path: '/personal',
      component: Personal,
      meta: { navShow: true }
    }
  ]
})
