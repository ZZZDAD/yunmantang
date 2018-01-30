<template>
  <div id='searchHistory'>
  	<span class="title">
  		历史搜索
  	</span>
  	<img
	  	src="../../../static/images/icons/cleanHistory.png"
	  	class="cleanHistory"
	  	@click='cleanHistory'
  	>
  	<div class="historyList">
  		<span
  			class="historyItem"
  			v-for='(historyItem,index) of historyItems'
				:key='index'
        @click='clickItem(historyItem)'
  		>
  			{{ historyItem }}
  		</span>
  	</div>
  </div>
</template>

<script>
export default {
	data () {
		return {
			historyItems: localStorage.historyItem.split(',')
		}
	},
	methods: {
		cleanHistory (e) {
			var con;
			con = confirm("确认删除全部历史记录？");
			if (con == true) {
				window.localStorage.removeItem("historyItem");
				this.historyItems.splice(0, this.historyItems.length);
			}
		},
		clickItem (text) {
			//历史搜索
			var value = text;
			var Array = [];
			Array = localStorage.historyItem.split(',');
			//清除相同记录
			for (var index = 0; index < Array.length; index++) {
				if (value == Array[index]) Array.splice(index, 1);
			}
			Array.unshift(value);
			localStorage.historyItem = Array;
			//传text值
			this.$emit('transferInputValue', text);
			//搜索
			this.$emit('search');
		}
	}
}
</script>

<style lang="scss">
#searchHistory {
  margin-top: 58px;
  text-align: left;
  .title {
    margin: 15px;
  }
  .cleanHistory {
    width: 35px;
    float: right;
    padding: 10px;
    margin-top: -5px;
    margin-right: 20px;
  }
  .historyList {
    margin-top: 10px;
    width: 80%;
    .historyItem {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 18px;
      background: rgb(240, 240, 240);
      font-size: 0.9em;
      margin-bottom: 8px;
      margin-left: 18px;
    }
  }
}
</style>
