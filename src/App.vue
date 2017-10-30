<template>
  <div id="app">
    <v-app>
      <nav-bar></nav-bar>
      
      <main :class='currentClass'>
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
        return this.$route.path
      },
      currentClass(){
        if (this.currentPath == "/events"){
          return "musical-note-background";
        }

        if(this.currentPath == "/about" || this.currentPath == "/contact" || this.currentPath == "/compositions"){
          return "blue-grey darken-1"
        } else {
          return ""
        }
      }
  }
}
</script>

<style lang="scss">
.musical-note-background {
  background: url('./assets/musical-notes-2.jpeg')
}
</style>
