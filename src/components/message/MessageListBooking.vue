<template>
  <div id="messageBooking">
  	<div
  		class="booking"
  		v-for='(booking,index) of bookings'
  		:key='index'
  	>
	    <div
	    	class="card-header"
	    	@click='showIndex=(showIndex!=index)?index:-1'
	    >
        <span class="remainTime">
          剩余时间:{{ booking.remainTime }}
        </span>
	      <span class="commodityName">
	      	{{ booking.commodityName }}
	      </span>
	      <img
          v-for="image of booking.commodityImages"
		      :src="image"
		      class="commodityImages"
	      >
	    </div>
      <div
        class="card-body"
        v-if='showIndex==index'
      >
        <div
          v-for='message of booking.messages'
          class='message'
        >
          <img :src="message.userHead" class="userHead">
          <span class="userName">
            {{ message.userName }}
          </span>
          <span class="userMessage">
            {{ message.userMessage }}
          </span>
          <button> 聊天 </button>
          <button> 接受预订 </button>
        </div>
        <span class="noRelease" v-if='!booking.messages[0]'>
          暂无预订留言
        </span>
      </div>
  	</div>
  	<span class="noRelease" v-if='!bookings[0]'>
  		无正在发布的宝贝
  	</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	showIndex: -1,
      bookings: [
      	{
      		commodityName: '牙膏',
      		commodityImages: [
      			'../../../static/images/yagao.gif',
            '../../../static/images/yagao.gif',
      			'../../../static/images/yagao.gif'
      		],
      		remainTime: '12天',
      		messages: [
      			{
      				userName: '张大D',
      				userHead: '../../../static/images/person.jpg',
      				userMessage: '八块卖不llllll啦啦啦啦啦啦啦啦',
      				time: '13:00'
      			},
      			{
      				userName: '张大D15116',
      				userHead: '../../../static/images/person.jpg',
      				userMessage: '八块卖不',
      				time: '13:00'
      			}
      		]
      	},
      	{
      		commodityName: '龟苓膏',
      		commodityImages: [
      			'../../../static/images/yagao.gif'
      		],
      		remainTime: '12',
      		messages: [
      			
      		]
      	}
      ]
    }
  }
}
</script>

<style lang="scss">
#messageBooking {
	text-align: left;
  .booking {
    .card-header {
      padding: 10px 25px;
      border-radius: 8px;
      margin-bottom: 5px;
      .commodityName {
        font-size: 1em;
        width: 90%;
        border-bottom: 1px solid rgb(230,230,230);
        display: block;
      }
      .commodityImages {
        width: 50px;
        height: 50px;
        margin: 10px 10px 0 0;
      }
      .remainTime {
        float: right;
        color: rgb(120,120,120);
        font-size: .8em;
      }
    }
    .card-body {
      margin-top: -20px;
      .message {
        height: 70px;
        border-bottom: 1px solid #e6e6e6;
        .userHead {
          border-radius: 5px;
          width: 50px;
          margin: 10px 0;
        }
        .userName {
          font-size: 1em;
          margin: 0 10px;
          position: relative;
          top: -10px;
        }
        .userMessage {
          color: rgb(70,70,70);
          font-size: .8em;
          display: block;
          position: relative;
          top: -30px;
          left: 66px;
          width: 70%;
          height: 20px;
          overflow: hidden;
        }
        button {
          position: relative;
          top: -80px;
          left: 55%;
          border: 1px rgb(24,152,217) solid;
          border-radius: 8px;
          background: rgb(24,152,217);
          font-size: .9em;
          color: white;
          font-weight: 500;
          padding: 2px 10px;
          margin-right: 8px;
        }
      }
    }
  }
  .noRelease {
    text-align: center;
    display: block;
    margin: 15px auto;
    font-size: .9em;
  }
}
</style>