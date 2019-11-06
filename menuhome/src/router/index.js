import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Menu from '@/components/menu/Menu'
import Orderfood from '@/components/menu/Orderfood'
import Assess from '@/components/menu/Assess'


import Order from '@/components/order/Order'
import My from '@/components/my/My'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:Index,
      component: Index
    },
    {
      path: '/Menu',
      name:Menu,
      component: Menu,
      children:[
        {path:'/',component:Orderfood},
        {path:'/Assess',component:Assess}
      ]
    },
    {
      path: '/Order',
      name:Order,
      component: Order
    },
    {
      path: '/My',
      name:My,
      component: My
    },
  ]
})
