<template>
  <div id="myRelease">
    <div class="head">
      <div class="img-div" @click="goBack">
        <img src="../../../static/images/icons/goBack.png">
      </div>
      <span>  我在发布 </span>
    </div>
    <div class="myReleaseList">
      <div
        class="myReleaseItem"
        v-for='(item, index) of myReleaseItems'
        :key='index'
      >
        <div class="highlightBG">
          <div class="image">
            <img :src="item.image">
          </div>
          <span class="name"> {{ item.name }} </span>
          <span class="price"> ¥{{ item.price }} </span>
          <button> 编辑 </button>
          <button> 查看 </button>
        </div>
        <span class="releaseTime">
          <span class="highlight"> 上架时间 </span>
          {{ item.releaseTime }}
        </span>
        <span class="remainTime">
          <span class="highlight"> 剩余时间 </span>
          {{ item.remainTime }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myReleaseItems: [
        {
          id: '123456',
          name: '牙膏',
          price: 30,
          image: '../../../static/images/yagao.gif',
          releaseTime: '3天前',
          remainTime: '13天'
        },
        {
          id: '123456',
          name: '牙膏',
          price: 30,
          image: '../../../static/images/yagao.gif',
          releaseTime: '3天前',
          remainTime: '13天'
        }
      ]
    }
  },
  mounted () {
    console.log(this.$route.params.userId);
  },
  methods: {
    goBack (e) {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss">
#myRelease {
  .head {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 48px;
    line-height: 48px;
    font-size: 1.2em;
    background: rgb(24, 152, 217);
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
  .myReleaseList {
    margin-top: 48px;
    text-align: left;
    .myReleaseItem {
      height: 140px;
      border-bottom: 1px rgb(160, 160, 160) solid;
      .highlightBG {
        background: rgb(245, 245, 245);
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
          color: rgb(71, 71, 71);
          position: relative;
          top: -90px;
          left: 130px;
        }
        button {
          padding: 0 15px;
          float: right;
          position: relative;
          top: -60px;
          margin-right: 10px;
          border: 1px rgb(220, 220, 220) solid;
          border-radius: 15px;
          background: rgb(245, 245, 245);
          color: rgb(110, 110, 110);
        }
      }
      .releaseTime,
      .remainTime {
        display: inline-block;
        width: 140px;
        color: rgb(24, 152, 217);
        margin-left: 10px;
        margin-top: 2px;
        span.highlight {
          background: rgb(24, 152, 217);
          padding: 2px 4px 2px 6px;
          color: white;
          border-radius: 10px;
          margin-right: 8px;
        }
      }
    }
  }
}
</style>
