<template>
  <div id="homeList">
    <div class="media" v-for="list of lists">
		  <img class="mr-4" :src="list.image" alt='Image Lost'>
		  <div class="media-body">
		    <h5 class="mt-2">{{ list.name }}</h5>
		    说明：{{ list.introduction }}
		    <p class="price">
		    	<span class="rmbSymbol">¥</span> {{ list.price }}
		    </p>
		    <p class="tip"> 点击查看详情-> </p>
		  </div>
		</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	lists: [
    		{
    			name: '牙膏',
    			price: '30',
    			image:'../../static/images/icons/cosmetic.png',
    			introduction: '9成新'
    		},
    		{
    			name: '牙齿',
    			price: '130',
    			image:'../../static/images/icons/cosmetic.png',
    			introduction: '4成新'
    		},
    		{
    			name: '毛刷',
    			price: '555530',
    			image:'../../static/images/icons/cosmetic.png',
    			introduction: '5成新'
    		}
    	]
    }
  }
}

</script>

<style>
#homeList {
	margin-top: 1.5px;
	background: white;
}
.media {
	border-bottom: .5px solid rgb(240,240,240);
}
.media .media-body {
	text-align: left;
}
.media img {
	height: 145px;
	width: 145px;
}
.media .price {
	color: rgb(239,73,43);
	font-size: 1.3em;
	margin-top: .6em;
	margin-bottom: 0;
}
.media .price .rmbSymbol {
	font-size: .6em;
}
.media .tip {
	margin-top: 5px;
	margin-bottom: 0;
	font-size: .5em;
	color: rgb(130,131,133);
}
</style>
