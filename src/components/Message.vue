<template>
  <div>
    消息
    <MessageList></MessageList>
    <MessageBottomNav></MessageBottomNav>
  </div>
</template>

<script>
import MessageList from './MessageList.vue'
import MessageBottomNav from './MessageBottomNav.vue'

export default {
  components: {
    MessageList,
    MessageBottomNav
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
