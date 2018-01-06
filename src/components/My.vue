<template>
  <div>
    我的
    <MyId></MyId>
    <MyStatus></MyStatus>
  </div>
</template>

<script>
import MyId from './MyId.vue'
import MyStatus from './MyStatus.vue'

export default {
  data () {
    return {
      
    }
  },
  components: {
  	MyId,
  	MyStatus
  }
}
</script>

<style>

</style>
