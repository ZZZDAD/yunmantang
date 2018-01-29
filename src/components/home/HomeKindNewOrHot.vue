<template>
  <div id="homeKindNewOrHot" class="container" >
  	<div class="row">
  		<div
        class="col"
        :class='{"active":(!NewOrHot)}'
        @click='setNewOrHot(0)'
      >
  			最新
  		</div>
  		<div
        class="col"
        :class='{"active":(NewOrHot)}'
        @click='setNewOrHot(1)'
      >
  			最热
      </div>
  	</div>
  </div>
</template>

<script>
export default {
  props: {
    NewOrHot: {
      type: Number,
      required: true
    }
  },
  methods: {
    setNewOrHot(NewOrHot){ 
      this.$emit('transferNewOrHot', NewOrHot);
    }
  }
}
</script>

<style lang="scss">
#homeKindNewOrHot {
  border-bottom: 2px rgb(240,240,240) solid;
  line-height: 35px;
  .col {
    height: 35px;
    padding: 0;
    color: rgb(120,120,120);
    &.active {
      color: rgb(24,152,217);
      border-bottom: 2px rgb(24,152,217) solid;
      font-weight: 500;
    }
  }
}
</style>