<template>
  <div id="app">
    <v-app>
      <nav-bar></nav-bar>
      
      <main>
        <router-view></router-view>
      </main>
    </v-app>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
