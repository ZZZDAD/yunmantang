<template>
  <div id="search">
    <SearchInput
      :inputValue='inputValue'
      @transferInputValue='getInputValue'
      @search='searchItem'
    ></SearchInput>
    <SearchHistory
      @transferInputValue='getInputValue'
      @search='searchItem'
    ></SearchHistory>
    <SearchHot
      @transferInputValue='getInputValue'
      @search='searchItem'
    ></SearchHot>
  </div>
</template>

<script>
import SearchInput from './SearchInput.vue'
import SearchHistory from './SearchHistory.vue'
import SearchHot from './SearchHot.vue'

export default {
  components: {
    SearchInput,
    SearchHistory,
    SearchHot
  },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    getInputValue (inputValue) {
      this.inputValue = inputValue;
    },
    searchItem (e) {
      //跳转
      this.$router.push({ name: 'SearchResult', params: { item: this.inputValue } });
    }
  }
}
</script>

<style lang="scss">
#search {
  background: white;
}
</style>
