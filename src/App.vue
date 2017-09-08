<template>
  <div id="app">
  <home></home>
    <!-- <router-view></router-view> -->
  </div>
</template>
<style src="vue-material/dist/vue-material.css"></style>
<script>
import home from './components/home.vue'

export default {
  name: 'app',
  components: {
  	home: home
  }
}
</script>
<style>
#app {
  width:100%;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
