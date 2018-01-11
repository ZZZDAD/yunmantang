<template>
  <div id="homeList">
  	<HomeListDetail
  		v-for='(list,index) of lists'
  		:key='index'
  		:list='list'
  	>
  	</HomeListDetail>
  </div>
</template>

<script>
import HomeListDetail from './HomeListDetail.vue'

export default {
	components: {
  	HomeListDetail
  },
  data () {
    return {
    	lists: [
    		{
    			user: {
    				name: '中国人',
    				headImage: '../../static/images/yagao.gif'
    			},
    			article: {
    				name: '牙膏',
	    			price: '30',
	    			originalPrice: '100',
	    			releaseTime: '10分钟',
	    			images: [
	    				'../../static/images/yagao.gif',
	    				'../../static/images/yagao.gif'
	    			],
	    			introduction: '9成新'
    			}
    		},
    		{
    			user: {
    				name: '中国人',
    				headImage: '../../static/images/yagao.gif'
    			},
    			article: {
    				name: '牙膏',
	    			price: '30',
	    			originalPrice:'100',
	    			releaseTime: '10小时',
	    			images: [
	    				'../../static/images/yagao.gif'
	    			],
	    			introduction: '9成新'
    			}
    		},
    		{
    			user: {
    				name: '中国人',
    				headImage: '../../static/images/yagao.gif'
    			},
    			article: {
    				name: '牙膏',
	    			price: '30',
	    			originalPrice:'100',
	    			releaseTime: '10分钟',
	    			images: [
	    				'../../static/images/yagao.gif'
	    			],
	    			introduction: '9成新'
    			}
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
</style>
