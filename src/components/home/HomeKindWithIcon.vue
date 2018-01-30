<template>
  <div id="homeKindWithIcon" class="container" >
  	<div class="row">
  		<div
        class="col"
        v-for='(kind,index) of [kinds[1],kinds[2],kinds[3],kinds[4],kinds[5]]'
        :key='index'
        @click='setKind(kind.value)'
      >
  			<img :src="kind.icon">
  			<span class="kindName">{{ kind.name }}</span>
  		</div>
  	</div>
  	<div class="row">
  		<div
        class="col"
        v-for='(kind,index) of [kinds[6],kinds[7],kinds[8],kinds[9],kinds[10]]'
        :key='index'
        @click='setKind(kind.value)'
      >
  			<img :src="kind.icon">
        <span class="kindName">{{ kind.name }}</span>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  props: {
    kinds: {
      type: Array
    }
  },
  methods: {
    setKind (kind) {
      this.$emit('transferKind', kind);
    }
  }
}
</script>

<style lang="scss">
#homeKindWithIcon {
  margin-top: 48px;
  border-bottom: 2px rgb(240, 240, 240) solid;
  .col {
    height: 70px;
    padding: 0;
    img {
      width: 80%;
      max-width: 40px;
      display: block;
      margin: 5px auto -5px;
    }
    .kindName {
      font-size: 0.7em;
      color: rgb(24, 152, 217);
    }
  }
}
</style>