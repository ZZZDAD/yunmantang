<template>
  <div id="homeKind">
    <HomeKindWithIcon
      :kinds="kinds"
      @transferKind='getKind'
    ></HomeKindWithIcon>
    <HomeKindWithoutIcon
      :kinds="kinds"
      :chooseKindValue="kindValue"
      @transferKind='getKind'
    ></HomeKindWithoutIcon>
    <HomeKindNewOrHot
      :NewOrHot="NewOrHot"
      @transferNewOrHot='getNewOrHot'
    ></HomeKindNewOrHot>
  </div>
</template>

<script>
import HomeKindWithIcon from './HomeKindWithIcon.vue'
import HomeKindWithoutIcon from './HomeKindWithoutIcon.vue'
import HomeKindNewOrHot from './HomeKindNewOrHot.vue'

export default {
  components: {
    HomeKindWithIcon,
    HomeKindWithoutIcon,
    HomeKindNewOrHot
  },
  data () {
    return {
      kindValue: 'all',
      NewOrHot: 0, // 0:最新, 1:最热
      kinds: [
        {
          name: '全部',
          value: 'all'
        }, {
          name: '化妆品',
          value: 'cosmetic',
          icon: '../../../static/images/icons/cosmetic.png'
        }, {
          name: '服饰',
          value: 'clothes',
          icon: '../../../static/images/icons/clothes.png'
        }, {
          name: '电子产品',
          value: 'electronicProduct',
          icon: '../../../static/images/icons/electronicProduct.png'
        }, {
          name: '书籍',
          value: 'books',
          icon: '../../../static/images/icons/books.png'
        }, {
          name: '文具',
          value: 'stationery',
          icon: '../../../static/images/icons/stationery.png'
        }, {
          name: '日用品',
          value: 'daily',
          icon: '../../../static/images/icons/daily.png'
        }, {
          name: '食品',
          value: 'food',
          icon: '../../../static/images/icons/food.png'
        }, {
          name: '运动装备',
          value: 'sport',
          icon: '../../../static/images/icons/sport.png'
        }, {
          name: '交通工具',
          value: 'transportation',
          icon: '../../../static/images/icons/transportation.png'
        }, {
          name: '其他',
          value: 'others',
          icon: '../../../static/images/icons/others.png'
        }
      ]
    }
  },
  methods: {
    getKind (kind) {
      this.kindValue = kind;
      this.NewOrHot = 0;
      console.log(this.kindValue);
      console.log(this.NewOrHot);
      //http请求
    },
    getNewOrHot (NewOrHot) {
      this.NewOrHot = NewOrHot;
      console.log(this.kindValue);
      console.log(this.NewOrHot);
      //http请求
    }
  }
}
</script>

<style lang="scss">
#homeKind {
}
</style>
