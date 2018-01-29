<template>
  <div id="myBought">
    <div class="head">
      <div class="img-div" @click="goBack">
        <img src="../../../static/images/icons/goBack.png">
      </div>
      <span>  我已买到 </span>
    </div>
    <div class="myBoughtList">
      <div
        class="myBoughtItem"
        v-for='(item, index) of myBoughtItems'
      >
        <div class="highlightBG">
          <div class="image">
            <img :src="item.image">
          </div>
          <span class="name"> {{ item.name }} </span>
          <span class="price"> ¥{{ item.price }} </span>
          <span class="BoughtTime"> {{ item.BoughtTime }} </span>
        </div>
        <span class="seller">
          <span class="highlight"> 卖家 </span>
          {{ item.seller }}
          <button> 联系ta </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myBoughtItems: [
        {
          id: '123456',
          name: '牙膏',
          price: 30,
          image: '../../../static/images/yagao.gif',
          BoughtTime: '18/2/10',
          seller: '张大D'
        }
      ]
    }
  },
  mounted() {
    console.log(this.$route.params.userId);
  },
  methods: {
    goBack(e) {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss">
#myBought {
  .head {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 48px;
    line-height: 48px;
    font-size: 1.2em;
    background: rgb(24,152,217);
    color: white;
    z-index: 99;
    .img-div {
      display: inline-block;
      float: left;
      width: 50px;
      img {
        width: 25px;
        position: relative;
        top: -2px;
      }
    }
    span {
      position: relative;
      left: -20px;
    }
  }
  .myBoughtList {
    margin-top: 48px;
    text-align: left;
    .myBoughtItem {
      height: 140px;
      border-bottom: 1px rgb(160,160,160) solid;
      .highlightBG {
        background: rgb(245,245,245);
        padding: 0 20px;
        height: 110px;
        .image {
          margin-top: 5px;
          display: inline-block;
          width: 100px;
          height: 100px;
          overflow: hidden;
          line-height: 100px;
          img {
            width: 100%;
          }
        }
        .name {
          font-size: 1.1em;
          display: block;
          position: relative;
          top: -90px;
          left: 130px;
        }
        .price {
          font-size: 1.1em;
          color: rgb(71,71,71);
          position: relative;
          top: -90px;
          left: 130px;
        }
        .BoughtTime {
          padding: 0 15px;
          float: right;
          position: relative;
          top: -60px;
          margin-right: 10px;
          background: rgb(245,245,245);
          color: rgb(110,110,110);
        }
      }
      .seller {
        display: inline-block;
        color: rgb(71,71,71);
        margin-left: 20px;
        width: 90%;
        margin-top: 2px;
        span.highlight {
          background: rgb(24,152,217);
          padding: 2px 4px 2px 6px;
          color: white;
          border-radius: 10px;
          margin: 0 8px;
        }
        button {
          float: right;
          margin-right: 10%;
          color: rgb(24,152,217);
          border: 1px rgb(24,152,217) solid;
          background: white;
          border-radius: 16px;
          font-size: .8em;
        }
      }
    }
  }
}
</style>
