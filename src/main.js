// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/store'

//Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://127.0.0.1:8000/'; // 默认baseUrl
axios.defaults.timeout = 1000; // 默认请求超时1000ms

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})