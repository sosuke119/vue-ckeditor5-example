import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ckeditor from '@ckeditor/ckeditor5-vue'
Vue.use(ckeditor)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
