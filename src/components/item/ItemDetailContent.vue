<template>
  <div id="itemDetailContent">
  	<span class="name"> {{ detail.name }} </span>
  	<span class="introduction"> {{ detail.introduction }} </span>
  	<span class="views"> {{ detail.views }}人次浏览 </span>
  	<span class="price"> <span class="CNY">¥</span> {{ detail.price }} </span>
  	<span class="originalPrice"> <del> ¥{{ detail.originalPrice }} </del> </span>
  	<span class="releaseTime"> 上架时间: {{ detail.releaseTime }} </span>
  	<span class="remainTime"> 剩余时长: {{ detail.remainTime }} </span>
  	<div class="mode">
  		<span>
  			<img src="../../../static/images/icons/faceToFace.png">
  			面交
  		</span>
  		<span>
  			<img src="../../../static/images/icons/mail.png">
	  		邮寄
	  	</span>
  	</div>
  </div>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	props: {
		detail: {
			type: Object,
			required: true
		}
	},
}
</script>

<style lang="scss">
#itemDetailContent {
  padding: 8px 10px 0;
  box-shadow: 0px -5px 15px rgb(210, 210, 210);
  span {
    display: block;
  }
  .name {
    font-size: 1.1em;
  }
  .introduction {
    color: rgb(71, 71, 71);
    display: inline;
  }
  .views {
    float: right;
    display: inline-block;
    margin-right: 5%;
    color: rgb(71, 71, 71);
    font-size: 0.9em;
    margin-top: 2px;
  }
  .price {
    font-size: 1.4em;
    color: rgb(239, 72, 42);
    text-shadow: 0px 0px 20px rgb(252, 222, 63);
    .CNY {
      display: inline;
      font-size: 0.7em;
    }
  }
  .originalPrice {
    color: rgb(150, 150, 150);
    font-size: 0.8em;
    margin-left: 6px;
  }
  .releaseTime,
  .remainTime {
    font-size: 0.9em;
    color: rgb(31, 31, 31);
    display: inline-block;
    width: 48%;
    border-bottom: 1px rgb(220, 220, 220) solid;
    text-align: center;
  }
  .remainTime {
    margin-left: -2%;
  }
  .mode {
    padding: 5px 10px;
    color: rgb(71, 71, 71);
    span {
      color: rgb(24, 152, 217);
      display: inline-block;
      font-size: 0.8em;
      margin-right: 10px;
      img {
        margin: 0 5px;
        height: 20px;
      }
    }
  }
}
</style>
