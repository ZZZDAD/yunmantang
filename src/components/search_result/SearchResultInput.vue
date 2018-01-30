<template>
  <div id="searchResultInput">
    <router-link to='./search'>
      <form id="searchItemForm" action="" onsubmit="return false;">
        <input
          id='searchItemInput'
          type="search"
          :value='searchValue'
        >
      </form>
    </router-link>
    <span class="cancle" @click='backHome'> 首页 </span>
  </div>
</template>

<script>
export default {
  props: {
    searchValue: {
      type: String
    }
  },
  methods: {
    backHome (e) {
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss">
#searchResultInput {
  height: 48px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 6px 0 7px;
  background: rgb(24, 152, 217);
  z-index: 99;
  form {
    display: inline;
  }
  input[type="search"] {
    border-radius: 18px;
    width: 80%;
    height: 34px;
    outline: none;
    -webkit-appearance: none;
    text-indent: 10px;
    background: white;
    border: 0;
    font-size: 1em;
    color: rgb(71, 71, 71);
  }
  .cancle {
    color: white;
    margin-left: 2px;
  }
}
</style>
