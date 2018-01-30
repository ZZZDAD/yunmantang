<template>
  <div id='searchHot'>
  	<span class="title">
  		大家在搜
  	</span>
  	<div class="hotList">
  		<span
  			class="hotItem"
  			v-for='hotItem of hotItems'
        @click='clickItem(hotItem)'
  		>
  			{{ hotItem }}
  		</span>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hotItems: ['口红','防蚀剂','香奈儿','龟苓膏','口红','防蚀剂','香奈儿','龟苓膏']
    }
  },
  methods: {
    clickItem(text) {
      //历史搜索
      var value = text;
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
      //传text值
      this.$emit('transferInputValue',text);
      //搜索
      this.$emit('search');
    }
  }
}
</script>

<style lang="scss">
#searchHot {
	margin-top: 10px;
	text-align: left;
	.title {
		margin: 15px;
	}
	.hotList {
		margin-top: 10px;
    width: 80%;
    .hotItem {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 18px;
      background: rgb(240,240,240);
      font-size: .9em;
      margin-bottom: 8px;
      margin-left: 18px;
    }
	}
}
</style>
