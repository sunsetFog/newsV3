import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


/*
vue3 引入element-ui
element-plus官方文档：https://element-plus.gitee.io/zh-CN/guide/design.html
*/
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
.use(store)
.use(router)
.use(ElementUI, { size: 'small', zIndex: 3000 })
.mount('#app')
