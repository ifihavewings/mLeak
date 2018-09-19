import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 引入各子路由
let routes = []
import Parta from '@/view/parta/route.js';
import Home from '@/view/home/route.js';
import HelloWorld from '@/components/HelloWorld'

// 路由整合到一个数组
routes.push(...Parta, ...Home, ...HelloWorld)
export default new Router({
  routes
})
