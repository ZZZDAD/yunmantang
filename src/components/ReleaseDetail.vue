<template>
  <div id="releaseDetail">
  	<label> 我出 </label>
  	<input type="text" id='name' placeholder="物品品牌,方便搜索哟(限10字)" maxlength="10">
  	<underline></underline>
  	<label class="introductionLabel"> 介绍 </label>
  	<textarea rows="3" type="text" id='introduction' placeholder="简单介绍你宝贝(限30字)" maxlength="30"></textarea>
  	<underline></underline>
  	<label class="kindLabel"> 分类 </label>
  	<select id="kind">
  		<option
  			v-for='kind of kinds'
  			:value='kind.value'
  		>
  		{{ kind.text }}
  		</option>
  	</select>
  	<img src="../../static/images/icons/down.png" class="firstDown">
  	<br><br>
  	<label class="daysLabel"> 上架时长 </label>
  	<select id="days">
  		<option
  			v-for='day of days'
  			:value='day.value'
  		>
  		{{ day.time }}
  		</option>
  	</select>
  	<img src="../../static/images/icons/down.png" class="secondDown">
  	<br><br>
  	<label class="originalPrice"> 原价 </label>
  	<input type="number" id="originalPrice" min="0" max="50000"/>
  	<label class="price"> 现售 </label>
  	<input type="number" id="price" min="0" max="50000"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kinds: [
      	{text: '请选择',value: ''},
      	{text: '化妆品',value: ''},
      	{text: '服饰',value: ''},
      	{text: '电子产品',value: ''},
      	{text: '书籍',value: ''},
      	{text: '文具',value: ''},
      	{text: '日用品',value: ''},
      	{text: '食品',value: ''},
      	{text: '运动装备',value: ''},
      	{text: '手机饰品',value: ''},
      	{text: '其他',value: ''}
      ],
      days: [
      	{time: '请选择'},
      	{time: '3天'},
      	{time: '7天'},
      	{time: '15天'}
      ]
    }
  }
}
</script>

<style>
#releaseDetail {
	margin-top: 30px;
}
underline {
	display: block;
	margin: 10px auto;
	width: 80%;
	border-bottom: 1px solid rgb(222,221,222);
}
#releaseDetail label {
	font-size: 1.2em;
	margin-left: 5px;
	color: rgb(24,152,217);
}
#releaseDetail input,textarea {
	width: 65%;
	font-size: 1.1em;
	color: rgb(41,41,41);
}
#releaseDetail label.introductionLabel {
	position: relative;
	top: -65px;
}
#releaseDetail textarea.introduction {
	height: 90px;
}
#releaseDetail label.kindLabel,
#releaseDetail label.daysLabel {
	float: left;
	margin-left: 11%;
	margin-top: 1%;
}
#kind,#days {
	border: rgb(24,152,217) 1px solid;
	border-radius: 4px;
	width: 40%;
	height: 40px;
	font-size: 1.1em;
	background: white;
	text-indent: 1.2em;
	float: right;
	margin-right: 18%;
}
img.firstDown {
	width: 20px;
	position: relative;
	right: -43%;
	top: 5px;
}
img.secondDown {
	width: 20px;
	position: relative;
	right: -38.5%;
	top: 6px;
}
#releaseDetail label.originalPrice,
#releaseDetail label.price {
	background: rgb(24,152,217);
	color: white;
	padding: 5px;
	border-radius: 4px;
}
input#originalPrice,
input#price {
	width: 80px;
	height: 40px;
	border: rgb(24,152,217) 1px solid;
	border-radius: 4px;
	margin-right: 2%;
	text-align: center;
	font-size: 1.1em;
	color: rgb(51,51,51);
}
</style>
