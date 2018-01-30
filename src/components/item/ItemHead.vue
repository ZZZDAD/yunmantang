<template>
  <div id="itemHead">
  	<div class="img-div" @click="goBack">
  		<img src="../../../static/images/icons/goBack.png">
  	</div>
    <span> 宝贝详情 </span>
  </div>
</template>

<script>
export default {
  methods: {
  	goBack(e){
  		this.$router.go(-1);
  	}
  }
}
</script>

<style lang="scss">
#itemHead {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 48px;
	line-height: 48px;
	font-size: 1.2em;
	background: rgb(24,152,217);
	color: white;
	z-index: 99;
	.img-div {
		display: inline-block;
		float: left;
		width: 50px;
		img {
			width: 25px;
			position: relative;
			top: -2px;
		}
	}
	span {
		position: relative;
		left: -20px;
	}
}
</style>
