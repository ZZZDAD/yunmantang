<template>
  <div>
    <ReleaseHead></ReleaseHead>
    <ReleaseDetail></ReleaseDetail>
    <ReleasePhoto></ReleasePhoto>
    <ReleaseBottomNav></ReleaseBottomNav>
  </div>
</template>

<script>
import ReleaseHead from './ReleaseHead.vue'
import ReleasePhoto from './ReleasePhoto.vue'
import ReleaseDetail from './ReleaseDetail.vue'
import ReleaseBottomNav from './ReleaseBottomNav.vue'

export default {
  components: {
    ReleaseHead,
    ReleasePhoto,
    ReleaseDetail,
    ReleaseBottomNav
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
