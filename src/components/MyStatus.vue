<template>
  <div id="myStatus">
   	<div
   		v-for='(status,index) of allStatus'
   		key='index'
   		class='status'
   	>
   		<img :src="status.icon" class="icon">
   		<span class="text">{{ status.text }}</span>
   		<img src="../../static/images/icons/rightArrow.png" class="rightArrow">
   		<span class="num">{{ status.num }}</span>
   	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      allStatus: [
      	{
      		text: '我发布的',
      		num: '0',
      		icon: '../../static/images/icons/releaseIcon.png'
      	},
      	{
      		text: '我卖出的',
      		num: '0',
      		icon: '../../static/images/icons/saleIcon.png'
      	},
      	{
      		text: '我买到的',
      		num: '0',
      		icon: '../../static/images/icons/buyIcon.png'
      	},
      	{
      		text: '我预订的',
      		num: '0',
      		icon: '../../static/images/icons/bookIcon.png'
      	}
      ]
    }
  }
}
</script>

<style>
#myStatus {
	background: white;
}
#myStatus .status {
	border-bottom: 1px rgb(240,240,240) solid;
	width: 100%;
	text-align: left;
	height: 62px;
	line-height: 62px;
	font-size: 1.3em;
	color: rgb(44,44,44);
}
#myStatus img.icon {
	width: 40px;
	margin: 0 1% 0 1%;
}
#myStatus .status .num {
	float: right;
	color: rgb(100,100,100);
	font-size: 1.2em;
	margin-right: 2%;
}
#myStatus img.rightArrow {
	width: 20px;
	float: right;
	margin-right: 5%;
	margin-top: 22px;
}
</style>
