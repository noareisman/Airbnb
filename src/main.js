import Vue from 'vue'
import app from './app.vue'
import './registerServiceWorker'
import  router  from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps';
import '../style/scss/main.scss'
import locale from 'element-ui/lib/locale/lang/en'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { locale })


const GOOGLE_API_KEY='AIzaSyANybSXcN18B2OElfk5DWJj_S7PKqi4BW8'// need to secure 

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
      key: GOOGLE_API_KEY,
      libraries: 'places',
  },
});

new Vue({
  router,
  store,
  ElementUI,
  render: h => h(app)
}).$mount('#app')
 