<template>
  <div id="home">
    <HomeSearch></HomeSearch>
    <HomeKind></HomeKind>
    <ItemList></ItemList>
    <div class="underBottomNav"></div>
    <HomeBottomNav></HomeBottomNav>
  </div>
</template>

<script>
import HomeSearch from './HomeSearch.vue'
import HomeKind from './HomeKind.vue'
import ItemList from '../item_list/ItemList.vue'
import HomeBottomNav from './HomeBottomNav.vue'

export default {
  components: {
    HomeSearch,
    HomeKind,
    ItemList,
    HomeBottomNav
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
#home {
  background: white;
  .underBottomNav {
    height: 50px;
    width: 100%;
  }
}
</style>
