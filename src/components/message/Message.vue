<template>
  <div id="message">
    <MessageHead></MessageHead>
    <MessageList></MessageList>
    <MessageBottomNav></MessageBottomNav>
  </div>
</template>

<script>
import MessageHead from './MessageHead.vue'
import MessageList from './MessageList.vue'
import MessageBottomNav from './MessageBottomNav.vue'

export default {
  components: {
    MessageHead,
    MessageList,
    MessageBottomNav
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
#message {
  background: rgb(247,247,247);
}
</style>
