import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'latestIndex',
      component: () => import(/* webpackChunkName: "index" */ './views/LatestIndex.vue')
    }
  ]
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
router.myback = function (__vue) {
  const list = __vue.$store.state.routeList
  const len = list.length
  if (len > 2) {
    const dis = 2 - len
    router.go(dis)
    __vue.$store.dispatch('resetRouteList')
  } else {
    router.go(-1)
  }
  // router.go(-1)
}
export default router
