<template>
  <div>
    <transition name='homeKindFade'>
      <div id="homeKindWithoutIcon" v-if='isShow'>
        <div class="kind_row">
          <div
            class="kind"
            v-for="kind of kinds"
            @click='chooseKind(kind.value)'
            :class="{'active':(chooseKindValue == kind.value)}"
          >
            {{ kind.name }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.js"></script>
<script>
var throttle = require('lodash/throttle');
export default {
  props: {
    chooseKindValue: {
      type: String,
      required: true
    },
    kinds: {
      type: Array
    }
  },
  data () {
    return {
      isShow: false,
      throttleScroll: null
    }
  },
  methods: {
    handleScroll () {
      let h = 105; //header的高度
      let wh = $(window).scrollTop(); //滚动的距离的
      
      if (wh > h) this.isShow = true;
      else this.isShow = false;
    },
    chooseKind(kind) {
      this.$emit('transferKind', kind);
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.throttleScroll, false);
    });
    this.throttleScroll = throttle(this.handleScroll, 100);
  },
  deactivated () {
    window.removeEventListener('scroll', this.throttleScroll);
  }
}
</script>

<style lang="scss">
#homeKindWithoutIcon {
  font-size: 1.1em;
  color: rgb(150,150,150);
  height: 35px;
  line-height: 35px;
  overflow-x: auto;
  border-bottom: 2px rgb(240,240,240) solid;
  position: fixed;
  top: 48px;
  right: 0;
  left: 0;
  background: white;
  z-index: 9;
  .kind_row {
    width: 750px;
    margin-left: -1px;
    .kind {
      display: inline-block;
      width: auto;
      text-align: center;
      padding-left: 10px;
      padding-right: 10px;
      &.active {
        color: white;
        background: rgb(24,152,217);
      }
    }
  }
}
.homeKindFade-enter-active {
  transition: all .6s ease;
}
.homeKindFade-leave-active {
  transition: all .6s;
}
.homeKindFade-leave-to {
  transform: translateY(-48px);
}
.homeKindFade-enter {
  transform: translateY(-48px);
}
</style>