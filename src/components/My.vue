<template>
  <div>
    我的
    <MyId></MyId>
    <MyStatus></MyStatus>
    <MyBottomNav></MyBottomNav>
  </div>
</template>

<script>
import MyId from './MyId.vue'
import MyStatus from './MyStatus.vue'
import MyBottomNav from './MyBottomNav.vue'

export default {
  components: {
    MyId,
    MyStatus,
    MyBottomNav
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
