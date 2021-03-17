import Vue from 'vue'
import app from './app.vue'
import './registerServiceWorker'
import  router  from './router'
import store from './store'
import '../style/scss/main.scss'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  ElementUI,
  render: h => h(app)
}).$mount('#app')
 