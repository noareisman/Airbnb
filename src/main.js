import Vue from 'vue'
import app from './App.vue'
import './registerServiceWorker'
import  router  from './router'
import store from './store'
// import * as VueGoogleMaps from 'vue2-google-maps';
import '../style/scss/main.scss'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



Vue.config.productionTip = false

// Vue.use(VueGoogleMaps, {
//   load: {
//       key: GOOGLE_API_KEY,
//       libraries: 'places',
//   },
// });

new Vue({
  router,
  store,
  ElementUI,
  render: h => h(app)
}).$mount('#app')
 