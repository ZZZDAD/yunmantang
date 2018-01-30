<template>
  <div id="itemDetailComments">
  	<div class="commentsHead">
  		留言评论
  	</div>
   	<div class="comments">
 			<div
	  		class="comment"
	  		v-for='(comment,index) of comments'
	  		v-if="index==0||show==1"
	  		:key='index'
  		>
  			<img :src="comment.headImage" class="headImage">
  			<div class="text">
  				<span class="userName"> {{ comment.userName }} </span>
  				<span class="commentContent"> {{ comment.content }} </span>
  			</div>
  		</div>
  	</div>
  	<div
  		class="showTip"
  		v-if="show==0"
  		@click="show=1"
  	>
	  	展开留言评论
	  	<img src="../../../static/images/icons/downOrange.png">	
	  </div>
	  <div
  		class="putTip"
  		v-if="show==1"
  		@click="show=0"
  	>
	  	收起留言评论
	  	<img src="../../../static/images/icons/upOrange.png">	
	  </div>
  </div>
</template>

<script>
export default {
	data () {
		return {
			show: 0,
		}
	},
  props: {
    comments: {
    	type: Array,
      required: true
    }
  },
}
</script>

<style lang="scss">
#itemDetailComments {
	.commentsHead {
		font-size: 1.1em;
		color: rgb(24,152,217);
		padding: 5px 30px;
		border-top: 1px rgb(24,152,217) solid;
	}
	.comments {
		.comment {
			border-top: 1px rgb(233,233,233) solid;
			min-height: 70px;
			.headImage {
				border-radius: 50%;
				width: 40px;
				height: 40px;
				float: left;
				margin: 10px;
			}
			.text {
				display: inline-block;
				width: 70%;
				margin-left: 10px;
				margin-top: 10px;
				.userName {
					width: 60%;
					font-size: 1.1em;

				}
				.commentContent {
					display: block;
					font-size: .9em;
					color: rgb(71,71,71);

				}
			}
		}
	}
	.showTip,.putTip {
		padding: 5px 5px 10px;
		text-align: right;
		color: rgb(248,167,87);
		border-bottom: 1px rgb(233,233,233) solid;
		img {
			width: 13px;
			margin-right: 35%;
		}
	}
}
</style>
