<template>
  <div id='releasePhoto' @click='postPhoto'>
    <img class='postPhoto' src="../../static/images/icons/postPhoto.png">
    <p> 上传图片 </p>
    <input type="file" v-show='false'/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  	postPhoto: ()=>{
  		
  	}
  }
}
</script>

<style>
#releasePhoto {
	margin-top: 20px;
	font-size: 1.3em;
  margin-bottom: 50px;
}
img.postPhoto {
	width: 80px;
}
</style>
