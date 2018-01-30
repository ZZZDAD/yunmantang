<template>
  <div id="itemDetail">
  	<ItemDetailImages
  		:images='detail.images'
  	></ItemDetailImages>
  	<ItemDetailContent
  		:detail='detail'
  	></ItemDetailContent>
  	<ItemDetailComments
  		:comments='comments'
  	></ItemDetailComments>
  </div>
</template>

<script>
import ItemDetailImages from './ItemDetailImages.vue'
import ItemDetailContent from './ItemDetailContent.vue'
import ItemDetailComments from './ItemDetailComments.vue'

export default {
	components: {
		ItemDetailImages,
		ItemDetailContent,
		ItemDetailComments
	},
	data () {
		return {

		}
	},
	props: {
		detail: {
			type: Object,
			required: true
		},
		comments: {
			type: Array,
			required: true
		}
	},
}
</script>

<style lang="scss">
#itemDetail {
  margin-top: 48px;
  text-align: left;
}
</style>
