<template>
  <div id="itemBottom">
    <img
      src="../../../static/images/icons/like.png"
      v-if='!like.own'
      @click="setLike"
    >
    <img
      src="../../../static/images/icons/likeRed.png"
      v-if='like.own'
      @click="removeLike"
    >
    <span class="likeTotal"> {{ like.total }} 赞</span>
    <div class="booking">
    	立即预订
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    like: {
      type: Object,
      required: true
    }
  },
  methods: {
    setLike (e) {
      //http请求
    },
    removeLike (e) {
      //http请求
    }
  }
}
</script>

<style lang="scss">
#itemBottom {
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(248, 247, 245);
  box-shadow: 0.5px -0.5px 1px rgb(222, 222, 222);
  line-height: 50px;
  img {
    width: 30px;
  }
  .booking {
    width: 150px;
    height: 100%;
    line-height: 50px;
    background: rgb(248, 167, 87);
    color: white;
    float: right;
  }
}
</style>
