<template>
  <div class="box">
    <div class="head">
      <img class="userHead" :src="list.user.headImage">
      <div>
        <h5>我出 ～ {{ list.article.name }}</h5>
        <span class="userName">{{ list.user.name }}</span>
        <span class="releaseTime">{{ list.article.releaseTime }}前</span>
      </div>
      <p class="price-div">
        <span class="price">
          <span class="rmbSymbol">¥</span> {{ list.article.price }}
        </span>
        <span class="originalPrice">
          ¥ {{ list.article.originalPrice }}
        </span>
      </p>
    </div>
	  <div class="body">
      <img
        v-if='list.article.images[0]'
        class="mr-2"
        :src="list.article.images[0]"
        alt='宝贝照片'
      >
      <img
        v-if='list.article.images[1]'
        class="mr-2"
        :src="list.article.images[1]"
        alt='宝贝照片'
      >
	    <p class="introduction">{{ list.article.introduction }}</p>
	    <p class="tip"> 点击查看详情-> </p>
	  </div>
	</div>
</template>

<script>
export default {
	props: {
    list: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.box {
  color: rgb(71,71,71);
	border-bottom: 1px solid rgb(240,240,240);
	height: 100%;
  text-align: left;
}
.box .head {
  display: block;
  width: 100%;
  padding: 10px 0 0 10px;
}
.box .head div {
  margin-left: 20px;
  width: 50%;
  display: inline-block;
  position: relative;
  top: -10px;
}
.box .head img.userHead {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  float: left;
}
.box .head h5 {
  margin-bottom: 0;
}
.box .releaseTime {
  font-size: .6em;
}
.box .price-div {
  display: inline-block;
  width: 25%;
  margin-bottom: 0;
}
.box .price {
  color: rgb(239,73,43);
  margin: 0;
  display: block;
  font-size: 1.6em;
}
.box .originalPrice {
  text-decoration:line-through;
}
.box .price .rmbSymbol {
  font-size: .6em;
}
.box .body {
  text-align: left;
  display: block;
  margin-left: 80px;
}
.box .body img {
  height: 105px;
  width: 105px;
  margin: auto;
}
.box .introduction {
  margin-bottom: 5px;
  font-size: 1.2em;
  width: 80%;
  height: 1.3em;
  overflow: hidden;
}
.box .tip {
	font-size: .5em;
	color: rgb(130,131,133);
}
</style>
