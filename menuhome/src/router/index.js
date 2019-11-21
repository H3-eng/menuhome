import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
/** 首页操作*/
import House from '@/components/index/children/House'
import Allnight from '@/components/index/children/Allnight'
/**菜单操作 */
import Menu from '@/components/menu/Menu'
import Orderfood from '@/components/menu/Orderfood'
import Assess from '@/components/menu/Assess'
import Store from '@/components/menu/Store'
import Sendorder from '@/components/menu/Sendorder'
/*订单操作*/
import Order from '@/components/order/Order'
import Assessoption from '@/components/order/Assessoption'
import Home from '@/components/home/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Index',
      component: Index
    },
    {
      path: '/Menu',
      name:Menu,
      component: Menu,
      children:[
        {path:'/',component:Orderfood},
        {path:'Assess',component:Assess},
        {path:'Store',component:Store}
      ]
    },
    {
      path: '/Sendorder',
      name:'Sendorder',
      component: Sendorder
    },
    {
      path: '/Order',
      name:Order,
      component: Order
    },
    {
      path: '/Assessoption',
      name:'Assessoption',
      component: Assessoption
    },
    {
      path: '/Home',
      name:'Home',
      component: Home
    },
    {
      path: '/House',
      name:'House',
      component: House
    },
    {
      path: '/Allnight',
      name:'Allnight',
      component: Allnight
    },
  ]
})
