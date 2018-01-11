<template>
  <div id="home">
    <HomeSearch></HomeSearch>
    <HomeKind></HomeKind>
    <HomeList></HomeList>
    <HomeBottomNav></HomeBottomNav>
  </div>
</template>

<script>
import HomeSearch from './HomeSearch.vue'
import HomeKind from './HomeKind.vue'
import HomeList from './HomeList.vue'
import HomeBottomNav from './HomeBottomNav.vue'

export default {
  components: {
    HomeSearch,
    HomeKind,
    HomeList,
    HomeBottomNav
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
#home {
  background: rgb(240,240,240);
  height: 1000px;
}
</style>
