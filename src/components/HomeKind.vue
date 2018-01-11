<template>
  <div id="homeKind" class="container">
  	<div class="row">
  		<div class="col" v-for='kind of kinds_1'>
  			<img :src="kind.icon">
  			{{ kind.name }}
  		</div>
  	</div>
  	<div class="row">
  		<div class="col" v-for='kind of kinds_2'>
  			<img :src="kind.icon">
  			{{ kind.name }}
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kinds_1: [
      	{name: '化妆品',icon:'../../static/images/icons/cosmetic.png'},
      	{name: '服饰',icon:'../../static/images/icons/clothes.png'},
      	{name: '电子产品',icon:'../../static/images/icons/electronicProduct.png'},
      	{name: '书籍',icon:'../../static/images/icons/books.png'},
      	{name: '文具',icon:'../../static/images/icons/stationery.png'}
      ],
      kinds_2: [
      	{name: '日用品',icon:'../../static/images/icons/daily.png'},
      	{name: '食品',icon:'../../static/images/icons/food.png'},
      	{name: '运动装备',icon:'../../static/images/icons/sport.png'},
      	{name: '手机饰品',icon:'../../static/images/icons/phone.png'},
      	{name: '其他',icon:'../../static/images/icons/others.png'}
      ]
    }
  }
}
</script>

<style>
#homeKind {
	background: white;
	margin-top: 48px;
}
.col {
	height: 80px;
	font-size: .82em;
	color: rgb(24,152,217);
}
.col img {
	width: 40px;
	display: block;
	margin: 10px auto 0;
}
</style>
