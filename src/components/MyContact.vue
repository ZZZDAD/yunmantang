<template>
  <div id="myContact">
   	<div
   		v-for='(contact,index) of contacts'
   		key='index'
   		class="contact"
   	>
   		<img :src="contact.icon" class="icon">
   		<span class="text">{{ contact.text }}</span>
   		<img src="../../static/images/icons/rightArrow.png" class="rightArrow">
   	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contacts: [
      	{
      		text: '联系客服',
      		icon: '../../static/images/icons/logo.png'
      	},
      	{
      		text: '意见反馈',
      		icon: '../../static/images/icons/logo.png'
      	}
      ]
    }
  }
}
</script>

<style>
#myContact {
	background: white;
  margin-top: 3%;
	margin-bottom: 50px;
}
#myContact .contact {
	border-bottom: 1px rgb(240,240,240) solid;
	width: 100%;
	text-align: left;
	height: 62px;
	line-height: 62px;
	font-size: 1.3em;
	color: rgb(44,44,44);
}
#myContact img.icon {
	width: 40px;
	margin: 0 1% 0 1%;
}
#myContact img.rightArrow {
	width: 20px;
	float: right;
	margin-right: 5%;
	margin-top: 22px;
}
</style>
