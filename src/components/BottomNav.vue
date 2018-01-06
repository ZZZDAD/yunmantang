<template>
  <div class="container" id="nav">
    <div class="row">
      <div class="col">
        <router-link to='/'>
          首页
        </router-link>
      </div>
      <div class="col">
        <router-link to='/release'>
          发布
        </router-link>
      </div>
      <div class="col">
        <router-link to='/message'>
          消息
        </router-link>
      </div>
      <div class="col">
        <router-link to='/my'>
          我的
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style>
div#nav {
  border-top: 1px rgb(71,71,71) solid;
  height: 50px;
  position: fixed;
  bottom: 0;
}
</style>
