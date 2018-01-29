<template>
  <div id="messageChat">
  	<div
  		class="chat"
  		v-for='(chat,index) of chats'
  	>
  		<span
  			class="newMessage"
  			:class='{"hidden":(!chat.newMessage)}'
  		>
  			{{ chat.newMessage }}
  		</span>
  		<img :src="chat.userHead" class="userHead">
  		<span class="userName">
  			{{ chat.userName }}
  		</span>
  		<span class="lastMessage">
  			{{ chat.lastMessage }}
  		</span>
  		<span class="lastTime">
  			{{ chat.lastTime }}
  		</span>
  	</div>
  	<span class="noMessage" v-if='!chats[0]'>
  		暂无消息
  	</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chats: [
      	{
      		userName: '张大D',
      		userHead: '../../../static/images/person.jpg',
      		lastMessage: '哪里交货发反反复复反复哈哈哈哈哈快快快快快快可11122',
      		lastTime: '13:00',
      		newMessage: 0
      	},
      	{
      		userName: '张大D 2',
      		userHead: '../../../static/images/person.jpg',
      		lastMessage: 'how much？',
      		lastTime: '星期一',
      		newMessage: 2
      	},
      	{
      		userName: '张大D 2',
      		userHead: '../../../static/images/person.jpg',
      		lastMessage: 'how much？',
      		lastTime: '17/10/25',
      		newMessage: 99
      	},
        {
          userName: '张大D 2',
          userHead: '../../../static/images/person.jpg',
          lastMessage: 'how much？',
          lastTime: '17/10/25',
          newMessage: 99
        },
        {
          userName: '张大D 2',
          userHead: '../../../static/images/person.jpg',
          lastMessage: 'how much？',
          lastTime: '17/10/25',
          newMessage: 99
        },
        {
          userName: '张大D 2',
          userHead: '../../../static/images/person.jpg',
          lastMessage: 'how much？',
          lastTime: '17/10/25',
          newMessage: 99
        },
        {
          userName: '张大D 2',
          userHead: '../../../static/images/person.jpg',
          lastMessage: 'how much？',
          lastTime: '17/10/25',
          newMessage: 99
        },
        {
          userName: '张大D 2',
          userHead: '../../../static/images/person.jpg',
          lastMessage: 'how much？',
          lastTime: '17/10/25',
          newMessage: 99
        },
        {
          userName: '张大D 2',
          userHead: '../../../static/images/person.jpg',
          lastMessage: 'how much？',
          lastTime: '17/10/25',
          newMessage: 99
        },
        {
          userName: '张大D 2',
          userHead: '../../../static/images/person.jpg',
          lastMessage: 'how much？',
          lastTime: '17/10/25',
          newMessage: 99
        },
        {
          userName: '张大D 2',
          userHead: '../../../static/images/person.jpg',
          lastMessage: 'how much？',
          lastTime: '17/10/25',
          newMessage: 99
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#messageChat {
  .chat {
    border-bottom: 1px rgb(230,230,230) solid;
    width: 100%;
    height: 60px;
    text-align: left;
  }
  .userHead {
    border-radius: 5px;
    width: 40px;
    height: 40px;
    margin: 10px 0;
    position: relative;
    right: 15px;
  }
  .userName {
    font-size: 1em;
    margin: 0 20px;
    position: relative;
    top: -5px;
    right: 20px;
  }
  .lastMessage {
    color: rgb(150,150,150);
    font-size: .8em;
    display: block;
    position: relative;
    top: -24px;
    left: 65px;
    width: 70%;
    height: 20px;
    overflow: hidden;
  }
  .lastTime {
    color: rgb(150,150,150);
    font-size: .9em;
    position: relative;
    top: -70px;
    left: 84%;
  }
  .newMessage {
    display: inline-block;
    min-width: 20px;
    width: auto;
    height: 20px;
    line-height: 16px;
    border: 1px white solid;
    border-radius: 50%;
    float: left;
    position: relative;
    right: -32px;
    color: white;
    background: rgb(239,80,43);
    padding: 1px 1px;
    font-size: 13px;
    text-align: center;
    z-index: 3;
    &.hidden {visibility: hidden}
  }
  .noMessage {
    text-align: center;
    display: block;
    margin: 15px auto;
    font-size: .9em;
  }
}
</style>