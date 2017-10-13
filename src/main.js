import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate';

import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Compositions from './pages/Compositions.vue'
import Events from './pages/Events.vue'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VeeValidate)

const routes = [
  { name: 'home', path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/compositions', component: Compositions },
  { path: '/events', component: Events }

]

const router = new VueRouter({
  routes 
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
