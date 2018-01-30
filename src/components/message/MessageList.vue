<template>
  <div id="messageList" class="card text-center">
  	<div id="messageListNav" class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <div class="container">
          <div class="row">
            <li
              class="nav-item col"
              v-for='(nav,index) of navs'
              @click='activeIndex=index'
            >
              <span
                class="nav-link"
                :class='{"active":(activeIndex==index)}'
              >
                {{ nav.text }}
              </span>
            </li>
          </div>
        </div>
      </ul>
	  </div>

	  <div class="lists">
	  	<MessageListChat v-if='activeIndex==0'></MessageListChat>
	  	<MessageListBooking v-if='activeIndex==1'></MessageListBooking>
	  	<messageListNotice v-if='activeIndex==2'></messageListNotice>
	  </div>
  </div>
</template>

<script>
import MessageListChat from './MessageListChat.vue'
import MessageListBooking from './MessageListBooking.vue'
import MessageListNotice from './MessageListNotice.vue'

export default {
	components: {
    MessageListChat,
    MessageListBooking,
    MessageListNotice
  },
  data () {
    return {
      activeIndex: 0,
      navs: [
        {text: '聊天'},
        {text: '预订留言'},
        {text: '通知'}
      ]
    }
  }
}
</script>

<style lang="scss">
#messageList {
  #messageListNav{
    position: fixed;
    top: 48px;
    right: 0;
    left: 0;
    z-index: 50;
    background: rgb(240,240,240);
    .col {
      padding: 0;
      font-size: .9em;
      .nav-link {
        padding: 8px 0;
        &.active {
          color: rgb(24,152,217);
          font-weight: 600;
        }
      }
    }
  }
  .lists {
    padding: 5px 15px 0;
    margin-top: 100px;
  }
}
</style>
