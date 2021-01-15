import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:"history",//去除哈希值的#号
  routes: [
    {
      path: '/echart',
      name: 'echart',
      component: () => import("@/components/echart")
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import("@/components/demo")
    },
    {
      path: '/progressbar',
      name: 'progressbar',
      component: () => import("@/components/progressbar")
    },
    {
      path: '/useaxios',
      name: 'useaxios',
      component: () => import("@/components/useaxios")
    }
  ]
})
