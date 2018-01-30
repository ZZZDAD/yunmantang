<template>
  <div id='homeSearch'>
  	<div class="div_bor">
  		<img src="../../static/images/icons/search.png" id="searchIcon">
    	<input type="search" name="search" placeholder="搜索宝贝">
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style>
#homeSearch {
	height: 48px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding: 5px 0 8px;
	background: rgb(24,152,217);
	z-index: 99;
}
.div_bor {
	width: 250px;
	margin: 0 auto;
	position: absolute;
	left: 0;
	right: 0;
}
#searchIcon {
	width: 26px;
	height: 24px;
	position: absolute;
	left: 20px;
	top: 5px;
}
input[type='search'] {
	border-radius: 18px;
	width: 100%;
	height: 34px;
	outline: none;
	-webkit-appearance: none;
	text-indent:55px;
	background: white;
	border: 0;
	font-size: 1.1em;
	color: rgb(71,71,71);
}
</style>
