import VueRouter from 'vue-router'
import home from '../views/home.vue'
import stayApp from '../views/stay-app.vue'
import stayDetails from '../views/stay-details.vue'
import stayEdit from '../views/stay-edit.vue'
import userDetails from '../views/user-details.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/stay',
    component: stayApp
  },
  {
    path: '/stay/:id',
    component: stayDetails
  },
  {
    path: '/stay/edit/:id?',
    component: stayEdit
  },
  {
    path: '/user/:id',
    component: userDetails
  },
  {
    path: '/login',
    component: login
  },

]

const router = new VueRouter({
  routes
})

export default router
