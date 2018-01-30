<template>
  <div class="container" id="bottomNav">
    <div class="row">
      <div
        class="col"
        v-for='(nav,index) of navs'
      >
        <router-link
          :to='nav.to'
          :class='{"active":(activeIndex==index)}'
        >
          <img :src="nav.icon">
          {{ nav.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 3,
      navs: [
        {
          name: '首页',
          to: '/',
          icon: '../../../static/images/icons/home.png'
        },
        {
          name: '发布',
          to: '/release',
          icon: '../../../static/images/icons/release.png'
        },
        {
          name: '消息',
          to: '/message',
          icon: '../../../static/images/icons/message.png'
        },
        {
          name: '我的',
          to: '/my',
          icon: '../../../static/images/icons/myActive.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#bottomNav {
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: rgb(248,247,245);
  box-shadow: .5px -.5px 1px rgb(222,222,222);
  a {
    color: rgb(94,94,94);
    font-size: .8em;
    text-decoration:none;
    &.active {
      color: rgb(24,152,217);
    }
    img {
      margin: 2px auto -5px;
      display: block;
      width: 33px;
    }
  }
}
</style>
