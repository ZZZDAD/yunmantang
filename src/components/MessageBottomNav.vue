<template>
  <div class="container" id="nav">
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
      activeIndex: 2,
      navs: [
        {
          name: '首页',
          to: '/',
          icon: '../../static/images/icons/home.png'
        },
        {
          name: '发布',
          to: '/release',
          icon: '../../static/images/icons/release.png'
        },
        {
          name: '消息',
          to: '/message',
          icon: '../../static/images/icons/messageActive.png'
        },
        {
          name: '我的',
          to: '/my',
          icon: '../../static/images/icons/my.png'
        }
      ]
    }
  }
}
</script>

<style>
div#nav {
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(248,247,245);
}
div#nav a{
  color: rgb(94,94,94);
  font-size: .8em;
  text-decoration:none;
}
div#nav a.active {
  color: rgb(24,152,217);
}
div#nav a img {
  margin: 2px auto -5px;
  display: block;
  width: 33px;
}
</style>
