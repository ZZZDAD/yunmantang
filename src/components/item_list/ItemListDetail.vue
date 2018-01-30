<template>
  <div class="ItemListDetail">
    <div class="head">
      <!--头像-->
      <img class="userHead" :src="item.user.headImage">
      <div class="text">
        <!--名字-->
        <h5 class="name">我出～ {{ item.detail.name }}</h5>
        <!--用户名字-->
        <span class="userName">{{ item.user.name }}</span>
        <!--发布时间-->
        <span class="releaseTime">{{ item.detail.releaseTime }}前</span>
      </div>
      <!--价格-->
      <p class="price-div">
        <span class="price">
          <span class="rmbSymbol">¥</span> {{ item.detail.price }}
        </span>
        <span class="originalPrice">
          ¥ {{ item.detail.originalPrice }}
        </span>
      </p>
    </div>
	  <div class="body">
      <!--图片-->
      <img
        v-for='image of item.detail.images'
        :src="image"
        class="mr-2 photo"
      >
	    <p class="introduction">{{ item.detail.introduction }}</p>
	    <p class="tip"> 点击查看详情-> </p>
	  </div>
	</div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.ItemListDetail {
  color: rgb(71, 71, 71);
  border-bottom: 1px solid rgb(240, 240, 240);
  height: 100%;
  text-align: left;
  .head {
    display: block;
    width: 100%;
    padding: 10px 0 0 10px;
    .userHead {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      float: left;
    }
    .text {
      margin-top: 10px;
      margin-left: 20px;
      width: 60%;
      display: inline-block;
      position: relative;
      top: -10px;
      .name {
        margin-bottom: 0;
        font-size: 1em;
      }
      .userName {
        font-size: 0.8em;
      }
      .releaseTime {
        font-size: 0.6em;
      }
    }
    .price-div {
      float: right;
      display: inline-block;
      width: 22%;
      margin-bottom: 0;
      .price {
        color: rgb(239, 73, 43);
        margin: 0;
        display: block;
        font-size: 1.2em;
        .rmbSymbol {
          font-size: 0.6em;
        }
      }
      .originalPrice {
        text-decoration: line-through;
        font-size: 0.6em;
        position: relative;
        top: -8px;
        left: 3px;
      }
    }
  }
  .body {
    text-align: left;
    display: block;
    margin-left: 60px;
    .photo {
      height: 90px;
      width: 90px;
      margin: auto;
    }
    .introduction {
      margin-bottom: 5px;
      font-size: 0.9em;
      width: 80%;
      height: 1.3em;
      overflow: hidden;
    }
    .tip {
      font-size: 0.6em;
      color: rgb(130, 131, 133);
    }
  }
}
</style>
