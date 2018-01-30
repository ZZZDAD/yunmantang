<template>
  <div id='searchInput'>
  	<form id="searchItemForm" action="" onsubmit="return false;">
	  	<input
	  		id='searchItemInput'
		  	type="search"
		  	placeholder="搜索宝贝"
		  	@search="searchItem"
		  	:value='inputValue'
		  	autofocus='autofocus'
	  	>
	  </form>
  	<span class="cancle" @click='backHome'> 取消 </span>
  </div>
</template>

<script>
export default {
  props: {
  	inputValue: {
  		type: String
  	}
  },
  mounted(){
  	document.getElementById("searchItemInput").focus()
  },
  methods: {
  	searchItem(e){
  		var value = e.path[0].value;
  		if(value) {
  			//历史搜索
	  		if(!localStorage.historyItem) {
	  			localStorage.historyItem = value;
	  		}
	  		else {
	  			var Array = [];
		  		Array = localStorage.historyItem.split(',');
		  		//清除相同记录
		  		for(var index = 0; index < Array.length; index++) {
		  			if(value == Array[index]) Array.splice(index,1);
		  		}
		  		Array.unshift(value);
		  		localStorage.historyItem = Array;
	  		}
	  		this.$emit('transferInputValue',value);
	  		//搜索
	  		this.$emit('search');
  		}
  	},
  	backHome(e){
  		this.$router.push('/');
  	}
  }
}
</script>

<style lang="scss">
#searchInput {
	height: 48px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding: 6px 0 7px;
	background: rgb(24,152,217);
	z-index: 99;
	form {
		display: inline;
	}
	input[type='search'] {
		border-radius: 18px;
		width: 80%;
		height: 34px;
		outline: none;
		-webkit-appearance: none;
		text-indent: 10px;
		background: white;
		border: 0;
		font-size: 1em;
		color: rgb(71,71,71);
	}
	.cancle {
		color: white;
		margin-left: 2px;
	}
}
</style>
