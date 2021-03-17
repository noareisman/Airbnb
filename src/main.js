import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import  router  from './router'
import store from './store'
// import * as VueGoogleMaps from 'vue2-google-maps';
import '../style/scss/main.scss'


// const GOOGLE_API_KEY;

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
  render: h => h(App)
}).$mount('#app')
 