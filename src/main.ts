import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UniqueId from 'vue-unique-id';
import '@/styles/global.scss'

Vue.use(UniqueId);
Vue.config.productionTip = false

new Vue({
  router,
  store: store.original,
  render: h => h(App)
}).$mount('#app')
