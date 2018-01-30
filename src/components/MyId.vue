<template>
  <div id="myId">
    <div class="head">
    	<p class="userName">{{ userName }}</p>
    </div>
    <div class="userId">
    	<img :src="userHead" class="userHead">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	userName: '张大D',
      userHead: '../../static/images/person.jpg'
    }
  }
}
</script>

<style>
#myId .head {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 48px;
	line-height: 48px;
	color: white;
	background: rgb(24,152,217);
	font-size: 1.4em;
}
#myId .userId {
	margin: 54px 0 15px;
	background: rgb(138,216,255);
	padding: 14px;
}
#myId .userId .userHead {
	border-radius: 50%;
	width: 80px;
	height: 80px;
}
</style>
