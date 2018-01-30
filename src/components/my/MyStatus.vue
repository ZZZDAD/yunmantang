<template>
  <div id="myStatus">
   	<div
   		v-for='(status,index) of allStatus'
   		:key='index'
   		class='status'
   	>
      <router-link :to='{name: status.name, params: {userId: "123"}}'>
        <div>
          <img :src="status.icon" class="icon">
          <span class="text">{{ status.text }}</span>
          <img src="../../../static/images/icons/rightArrow.png" class="rightArrow">
          <span class="total">{{ statusTotal[index] }}</span>
        </div>
      </router-link>
   	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      allStatus: [
        {
          text: '我在发布',
          icon: '../../../static/images/icons/releaseIcon.png',
          name: 'MyRelease'
        }, {
          text: '我在预订',
          icon: '../../../static/images/icons/bookIcon.png',
          name: 'MyBooking'
        }, {
          text: '我已卖出',
          icon: '../../../static/images/icons/saleIcon.png',
          name: 'MySold'
        }, {
          text: '我已买到',
          icon: '../../../static/images/icons/buyIcon.png',
          name: 'MyBought'
        }
      ],
      statusTotal: [0, 0, 1, 2]
    }
  }
}
</script>

<style lang="scss">
#myStatus {
  background: white;
  .status {
    border-bottom: 1px rgb(240, 240, 240) solid;
    width: 100%;
    text-align: left;
    height: 50px;
    line-height: 50px;
    font-size: 1em;
    a {
      text-decoration: none;
      color: rgb(44, 44, 44);
    }
    .icon {
      width: 30px;
      margin: 0 1% 0 5%;
    }
    .total {
      float: right;
      color: rgb(100, 100, 100);
      font-size: 1em;
      margin-right: 4%;
    }
    .rightArrow {
      width: 15px;
      float: right;
      margin-right: 5%;
      margin-top: 18px;
    }
  }
}
</style>
