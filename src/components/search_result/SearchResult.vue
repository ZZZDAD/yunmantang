<template>
  <div
    id="searchResult"
    @touchstart='touchStart'
    @touchmove='moving'
  >
    <transition name='searchResultInputFade'>
      <div v-if='showSearch'>
        <SearchResultInput
          :searchValue="searchValue"
        ></SearchResultInput>
        <div class='underInput'></div>
      </div>
    </transition>
    <ItemList
      :searchValue="searchValue"
    ></ItemList>
  </div>
</template>

<script>
import SearchResultInput from './SearchResultInput.vue'
import ItemList from '../item_list/ItemList.vue'

var startY = 0
var endY = 0
export default {
  components: {
    SearchResultInput,
    ItemList
  },
  data () {
    return { 
      searchValue: this.$route.params.item,
      showSearch: 1
    }
  },
  mounted() {
    console.log(this.$route.params.item);
    //http请求
  },
  methods: {
    touchStart(e) {
      startY = e.changedTouches[0].screenY;
    },
    moving(e) {
      endY = e.changedTouches[0].screenY;
      var moveY = endY - startY;
      if(moveY > 100) { //上拉
        this.showSearch = 1;
      }
      if(moveY < 100) { //下滑
        this.showSearch = 0;
      }
    }
  }
}
</script>

<style lang="scss">
#searchResult {
  background: white;
  .underInput {
    width: 100%;
    height: 48px;
  }
}
.searchResultInputFade-enter-active {
  transition: all .6s ease;
}
.searchResultInputFade-leave-active {
  transition: all .6s;
}
.searchResultInputFade-leave-to {
  transform: translateY(-48px);
}
.searchResultInputFade-enter {
  transform: translateY(-48px);
}
</style>
