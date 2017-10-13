import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Compositions from './pages/Compositions.vue'

Vue.use(Vuetify)
Vue.use(VueRouter)

const routes = [
  { name: 'home', path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/compositions', component: Compositions }
]

const router = new VueRouter({
  routes 
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
