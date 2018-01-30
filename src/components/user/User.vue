<template>
  <div id="user">
    <User></User>
    <User></User>
    <User></User>
  </div>
</template>

<script>


export default {
  components: {

  },
  mounted () {
    console.log(this.$route.params.userId);
    //http
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
#user {
}
</style>
