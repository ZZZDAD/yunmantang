<template>
  <div id="itemUser">
  	<span class="tip"> 点击头像可查看宝贝主人的评价 </span>
  	<router-link :to='{name: "User", params: {userId: user.id}}'>
    	<img :src="user.headImage" class="headImage">
  	</router-link>
    <span class="userName"> {{ user.name }} </span>
    <span class="credit"> 信誉分: {{ user.credit }} </span>
    <span class="lastLoginTime"> 最近上线时间: {{ user.lastLoginTime }} </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
#itemUser {
	padding-bottom: 4px;
	min-height: 120px;
	background: rgb(138,216,255);
	box-shadow: 0px -5px 15px rgb(210,210,210);
	padding-bottom: 50px;
	.tip {
		font-size: .7em;
		color: rgb(80,80,80);
		width: 98%;
		display: block;
		text-align: right;
		margin-bottom: -18px;
	}
	.headImage {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		display: block;
		margin: 10px auto;
	}
	.userName {
		display: block;
		font-size: 1.1em;
		font-weight: 500;
	}
	.credit {
		display: inline-block;
		width: 30%;
	}
	.lastLoginTime {
		display: inline-block;
		width: 60%;
	}
}
</style>
