<template>
  <div>
    首页
    <HomeSearch></HomeSearch>
    <HomeNav></HomeNav>
    <HomeList></HomeList>
  </div>
</template>

<script>
import HomeSearch from './HomeSearch.vue'
import HomeNav from './HomeNav.vue'
import HomeList from './HomeList.vue'

export default {
  data () {
    return {
      
    }
  },
  components: {
  	HomeSearch,
    HomeNav,
    HomeList
  }
}
</script>

<style>

</style>
