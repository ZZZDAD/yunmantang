<template>
  <div id="itemList">
    <router-link to='./item'>
      <ItemListDetail
        v-for='(item,index) of items'
        :key='index'
        :item='item'
      ></ItemListDetail>
    </router-link>
  </div>
</template>

<script>
import ItemListDetail from './ItemListDetail.vue'

export default {
  components: {
    ItemListDetail
  },
  data () {
    return {
      items: [
        {
          detail: {
            name: '香奈儿牙膏',
            price: '30',
            originalPrice: '100',
            releaseTime: '10分钟',
            images: [
              '../../../static/images/yagao.gif',
              '../../../static/images/yagao.gif'
            ],
            introduction: '9成新,只用过777次，可砍价800块'
          },
          user: {
            name: '张大D',
            headImage: '../../../static/images/person.jpg'
          }
        },
        {
          detail: {
            name: '香奈儿牙膏',
            price: '30',
            originalPrice: '100',
            releaseTime: '10分钟',
            images: [
              '../../../static/images/yagao.gif',
              '../../../static/images/yagao.gif',
              '../../../static/images/yagao.gif'
            ],
            introduction: '9成新,只用过777次，可砍价800块'
          },
          user: {
            name: '张大D',
            headImage: '../../../static/images/person.jpg'
          }
        },
        {
          detail: {
            name: '香奈儿牙膏',
            price: '30',
            originalPrice: '100',
            releaseTime: '10分钟',
            images: [
              '../../../static/images/yagao.gif',
              '../../../static/images/yagao.gif'
            ],
            introduction: '9成新,只用过777次，可砍价800块'
          },
          user: {
            name: '张大D',
            headImage: '../../../static/images/person.jpg'
          }
        },
        {
          detail: {
            name: '香奈儿牙膏',
            price: '30',
            originalPrice: '100',
            releaseTime: '10分钟',
            images: [
              '../../../static/images/yagao.gif',
              '../../../static/images/yagao.gif'
            ],
            introduction: '9成新,只用过777次，可砍价800块'
          },
          user: {
            name: '张大D',
            headImage: '../../../static/images/person.jpg'
          }
        },
        {
          detail: {
            name: '香奈儿牙膏',
            price: '30',
            originalPrice: '100',
            releaseTime: '10分钟',
            images: [
              '../../../static/images/yagao.gif',
              '../../../static/images/yagao.gif'
            ],
            introduction: '9成新,只用过777次，可砍价800块'
          },
          user: {
            name: '张大D',
            headImage: '../../../static/images/person.jpg'
          }
        },
        {
          detail: {
            name: '香奈儿牙膏',
            price: '30',
            originalPrice: '100',
            releaseTime: '10分钟',
            images: [
              '../../../static/images/yagao.gif',
              '../../../static/images/yagao.gif'
            ],
            introduction: '9成新,只用过777次，可砍价800块'
          },
          user: {
            name: '张大D',
            headImage: '../../../static/images/person.jpg'
          }
        }
      ]
    }
  }
}

</script>

<style lang="scss">
#itemList {
  a {
    text-decoration:none;
  }
}
</style>