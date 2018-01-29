<template>
  <div
    id='itemDetailImages'
    class="images"
    @touchstart='touchStart'
    @touchend='touchEnd'
  >
    <div class="carousel">
      <!--下方条状-->
      <ol class="carousel-indicators">
        <li
          v-for='(image,index) of images.src'
          :class="{'active':(activeIndex==index)}"
          @click='activeIndex=index'
        ></li>
      </ol>
      <!--图片区-->
      <div
        v-for='(image,index) of images.src'
        class="carousel-item"
        :class="{'active':(activeIndex==index)}"
      >
        <img :src="image">
      </div>
      <!--左右两侧按钮-->
      <a
        class="carousel-control-prev"
        @click='activeIndex-=1'
        v-if='activeIndex'
      >
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a
        class="carousel-control-next"
        @click='activeIndex+=1'
        v-if='images.total-1!=activeIndex'
      >
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </div>
</template>

<script>
var startX = 0;
var endX = 0;

export default {
	data () {
		return {
      activeIndex: 0
		}
	},
  props: {
    images: {
      type: Object,
      required: true
    }
  },
  methods: {
    touchStart(e){
      startX = e.changedTouches[0].screenX;
    },
    touchEnd(e){
      endX = e.changedTouches[0].screenX;
      var moveX = endX - startX;
      if(moveX > 0 && this.activeIndex > 0)
        this.activeIndex-=1;
      if(moveX < 0 && this.activeIndex < this.images.total-1)
        this.activeIndex+=1;
    }
  }
}
</script>

<style lang="scss">
#itemDetailImages {
  height: 320px;
  line-height: 320px;
  background: rgb(244,244,244);
  img {
    max-height: 320px;
    width: 100%;
    display: inline-block;
    margin: 0;
  }
}
</style>
