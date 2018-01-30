<template>
  <div id="item">
    <ItemHead></ItemHead>
    <ItemDetail
      :detail='item.detail'
      :comments='item.comments'
    ></ItemDetail>
    <ItemUser
      :user='item.user'
    ></ItemUser>
    <ItemBottom
      :like='item.detail.like'
    ></ItemBottom>
  </div>
</template>

<script>
import ItemHead from './ItemHead.vue'
import ItemUser from './ItemUser.vue'
import ItemDetail from './ItemDetail.vue'
import ItemBottom from './ItemBottom.vue'

export default {
  components: {
    ItemHead,
    ItemUser,
    ItemDetail,
    ItemBottom
  },
  data () {
    return {
      item: {
        detail: {
          name: '27寸长腿牙膏',
          price: '30',
          originalPrice: '100',
          releaseTime: '6小时前',
          remainTime: '5天',
          introduction: '9成新,只用过777次，可砍价800块',
          views: 11130,
          like: {
            total: 30,
            own: 0
          },
          images: {
            total: 3,
            src: [
              '../../../static/images/yagao.gif',
              'http://img0.imgtn.bdimg.com/it/u=3113843364,2872416214&fm=27&gp=0.jpg',
              'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2794142615,386385845&fm=200&gp=0.jpg'
            ]
          }
        },
        user: {
          id: '1515616156165',
          name: '大D',
          headImage: '../../../static/images/person.jpg',
          lastLoginTime: '18/05/16',
          credit: '4.3'
        },
        comments: [
          {
            userName: '大D',
            headImage: '../../../static/images/person.jpg',
            content: '好棒hhhhhhssss555555555555555'
          }, {
            userName: '大D',
            headImage: '../../../static/images/person.jpg',
            content: '好棒hhhhhhhhhhhhhhhhhhhhhhh哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈ssssssss555555555555555'
          }
        ],
      }
    }
  }
}
</script>

<style lang="scss">
#item {
}
</style>
