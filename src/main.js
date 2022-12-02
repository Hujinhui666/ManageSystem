import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/fonts/font_dirction/iconfont.css'
import store from './store'
import * as echarts from 'echarts';
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
