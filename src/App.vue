<template>
  <div id="app">
    <v-app>
      <nav-bar></nav-bar>
      
      <main :class='(currentPath == "/events")? "musical-note-background" : "blue-grey darken-1"'>
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
  computed: {
      currentPath(){
        console.log(this.$route.path)
        return this.$route.path
      }
  }
}
</script>

<style lang="scss">
.musical-note-background {
  background: url('./assets/musical-notes-2.jpeg')
}
</style>
