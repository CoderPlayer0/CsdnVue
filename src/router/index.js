import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
