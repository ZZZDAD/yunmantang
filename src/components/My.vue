<template>
  <div id="my">
    <MyId></MyId>
    <MyStatus></MyStatus>
    <MyContact></MyContact>
    <MyBottomNav></MyBottomNav>
  </div>
</template>

<script>
import MyId from './MyId.vue'
import MyStatus from './MyStatus.vue'
import MyContact from './MyContact.vue'
import MyBottomNav from './MyBottomNav.vue'

export default {
  components: {
    MyId,
    MyStatus,
    MyContact,
    MyBottomNav
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
#my {
  height: 100%;
  background: rgb(240,240,240);
  position: fixed;
  top: 0;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: auto;
}
</style>
