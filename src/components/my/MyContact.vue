<template>
  <div id="myContact">
   	<div
   		v-for='(contact,index) of contacts'
   		:key='index'
   		class="contact"
   	>
   		<img :src="contact.icon" class="icon">
   		<span class="text">{{ contact.text }}</span>
   		<img src="../../../static/images/icons/rightArrow.png" class="rightArrow">
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
      		icon: '../../../static/images/icons/logo.png'
      	},
      	{
      		text: '意见反馈',
      		icon: '../../../static/images/icons/logo.png'
      	},
        {
          text: '关于我们',
          icon: '../../../static/images/icons/logo.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#myContact {
	background: white;
  border-top: 15px rgb(240,240,240) solid;
  border-bottom: 145px rgb(240,240,240) solid;
	margin-bottom: 50px;
  .contact {
    border-bottom: 1px rgb(240,240,240) solid;
    width: 100%;
    text-align: left;
    height: 50px;
    line-height: 50px;
    font-size: 1em;
    color: rgb(44,44,44);
  }
  img {
    &.icon {
      width: 30px;
      margin: 0 1% 0 5%;
    }
    &.rightArrow {
      width: 15px;
      float: right;
      margin-right: 5%;
      margin-top: 18px;
    }
  }
}
</style>
