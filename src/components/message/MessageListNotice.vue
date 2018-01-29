<template>
  <div id="messageNotice">
    <div
      class="notice"
      v-for='(notice,index) of notices'
      :key='index'
    >
      <span class="title">{{ notice.title }}</span>
      <span class="content">{{ notice.content }}</span>
      <span class="from">来自{{ notice.from }}</span>
      <span class="time">{{ notice.time }}</span>
    </div>
  	<span class="noNotice" v-if='!notices[0]'>
      暂无通知
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notices: [
      	{
          title: '今夜宝贝不打烊！',
          content: '今天系统更新，上架下架不会有bug，请大伙放心啪啪啪啪啪啪啊啪啪啪啪啪啪啪啪啪啪',
          from: '云满堂团队',
          time: '18/01/14'
        },
        {
          title: '今夜宝贝不打烊！',
          content: '今天系统更新，上架下架不会有bug，请大伙放心啪啪啪啪啪啪啊啪啪啪啪啪啪啪啪啪啪lalallllll零零落落零零落落零零落落零零落落零零落落啦啦啦',
          from: '云满堂团队',
          time: '18/01/14'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#messageNotice {
  text-align: left;
  .notice {
    border-bottom: 1px rgb(247,247,247) solid;
    padding: 4px;
    .title {
      display: block;
      margin: 5px 0;
    }
    .content {
      font-size: .9em;
      display: block;
    }
    .from {
      font-size: .8em;
      color: rgb(150,150,150);
    }
    .time {
      font-size: .8em;
      color: rgb(150,150,150);
      float: right;
      margin-top: 4px;
    }
  }
  .noNotice {
    text-align: center;
    display: block;
    margin: 15px auto;
    font-size: .9em;
  }
}
</style>
