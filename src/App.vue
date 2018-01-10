<template>
  <div id="app">
    <router-view/>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import BottomNav from './components/BottomNav.vue'

export default {
  name: 'app',
  components: {
    BottomNav
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
