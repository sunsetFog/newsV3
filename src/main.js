import Vue from 'vue'
import App from './App.vue'
import router from './router'



Vue.config.productionTip = false
// Vue.config.devtools = true

// Vue.config.errorHandler = function (err, vm, info) {
//   console.error('@', err)
//   console.log('@@', vm)
//   console.log('@@@', info)
// }










router.beforeEach((to, from, next) => {

  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

