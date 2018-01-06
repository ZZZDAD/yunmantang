<template>
  <div id="app">
    <router-view/>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import FooterNav from './components/FooterNav.vue'

export default {
  name: 'app',
  components: {
    FooterNav
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
