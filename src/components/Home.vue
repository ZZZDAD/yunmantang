<template>
  <div id="home">
    首页
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
  data () {
    return {
      
    }
  },
  components: {
  	HomeSearch,
    HomeKind,
    HomeList,
    HomeBottomNav
  }
}
</script>

<style>
#home {
  background: rgb(240,240,240);
  height: 1000px;
}
</style>
