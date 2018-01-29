<template>
  <div id="releaseDetail">

    <!--物品名字-->
  	<label> 我出 </label>
  	<input
      type="text"
      id='name'
      placeholder="物品品牌,方便搜索哟(限10字)"
      maxlength="10"
      v-model='name'
      @input='setName'
    >
  	<underline></underline>

    <!--物品介绍-->
  	<label class="introductionLabel"> 介绍 </label>
  	<textarea
      rows="2"
      type="text"
      id='introduction'
      placeholder="简单介绍你宝贝(限20字)"
      maxlength="20"
      v-model='introduction'
      @input='setIntroduction'
    ></textarea>
  	<underline></underline>

    <!--物品分类-->
  	<label class="kindLabel"> 分类 </label>
  	<select
      id="kind"
      @change="setKind"
    >
  		<option
  			v-for='kind of kinds'
  			:value='kind.value'
  		>
  		{{ kind.text }}
  		</option>
  	</select>
  	<br><br>

    <!--上架时长-->
  	<label class="durationsLabel"> 上架时长 </label>
  	<select
      id="durations"
      @change="setDuration"
    >
  		<option
  			v-for='duration of durations'
  			:value='duration.value'
  		>
  		{{ duration.time }}
  		</option>
  	</select>
  	<br><br>

    <!--交易方式-->
    <label class="mode"> 交易方式 </label>
    <span
      class="mail"
      @click='setMail'
      :class="{'active':(mail==1)}"
    > 邮寄 </span>
    <span
      class="faceToFace"
      @click='setFaceToFace'
      :class="{'active':(faceToFace==1)}"
    > 面交 </span>
    <br><br>

    <!--价格-->
  	<label class="originalPrice"> 原价 </label>
  	<input
      type="number"
      id="originalPrice"
      oninput="if(value.length>5)value=value.slice(0,5)"
      onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"
      v-model='originalPrice'
      @input='setOriginalPrice'
    />
  	<label class="price"> 现售 </label>
  	<input
      type="number"
      id="price"
      oninput="if(value.length>5)value=value.slice(0,5)"
      onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"
      v-model='price'
      @input='setPrice'
    />
    <br>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      introduction: '',
      kind: '',
      duration: '',
      mail: 0,
      faceToFace: 0,
      originalPrice: '',
      price: '',
      kinds: [
      	{text: '请选择', value: ''},
      	{text: '化妆品', value: 'cosmetic'},
      	{text: '服饰', value: 'clothes'},
      	{text: '电子产品', value: 'electronicProduct'},
      	{text: '书籍', value: 'books'},
      	{text: '文具', value: 'stationery'},
      	{text: '日用品', value: 'daily'},
      	{text: '食品', value: 'food'},
      	{text: '运动装备', value: 'sport'},
      	{text: '交通工具', value: 'transportation'},
      	{text: '其他', value: 'others'}
      ],
      durations: [
      	{time: '请选择'},
      	{time: '3天', value: '3'},
      	{time: '7天', value: '7'},
      	{time: '15天', value: '15'}
      ]
    }
  },
  methods: {
    setName(e) {
      this.$emit('transferName',this.name);
    },
    setIntroduction(e) {
      this.$emit('transferIntroduction',this.introduction);
    },
    setKind(e) {
      this.kind = e.path[0].value;
      this.$emit('transferKind',this.kind);
    },
    setDuration(e) {
      this.duration = e.path[0].value;
      this.$emit('transferDuration',this.duration);
    },
    setMail(e) {
      if(this.mail==0) this.mail = 1;
      else this.mail = 0;
      this.$emit('transferMail',this.mail);
    },
    setFaceToFace(e) {
      if(this.faceToFace==0) this.faceToFace = 1;
      else this.faceToFace = 0;
      this.$emit('transferFaceToFace',this.faceToFace);
    },
    setOriginalPrice(e) {
      this.$emit('transferOriginalPrice',this.originalPrice);
    },
    setPrice(e) {
      this.$emit('transferPrice',this.price);
    }
  }
}
</script>

<style lang="scss">
underline {
  display: block;
  margin: 10px auto;
  width: 80%;
  border-bottom: 1px solid rgb(222,221,222);
}
#releaseDetail {
	margin-top: 58px;
  label {
    font-size: 1em;
    color: rgb(24,152,217);
    &.introductionLabel {
      position: relative;
      top: -30px;
    }
    &.kindLabel,&.durationsLabel,&.mode {
      float: left;
      margin-left: 11%;
    }
    &.originalPrice, &.price {
      background: rgb(24,152,217);
      color: white;
      padding: 2px 10px;
      border-radius: 8px;
    }
  }
  input,textarea {
    width: 65%;
    font-size: .9em;
    color: rgb(41,41,41);
    &.introduction {height: 60px}
    &#originalPrice, &#price {
      width: 80px;
      height: 30px;
      border: rgb(24,152,217) 1px solid;
      border-radius: 8px;
      margin-right: 2%;
      text-align: center;
      font-size: .9em;
      color: rgb(51,51,51);
    }
    &[type=checkbox] {
      width: 20px;
      position: relative;
      left: -25px;
    }
  }
  #kind,#durations {
    border: rgb(24,152,217) 1px solid;
    border-radius: 8px;
    width: 30%;
    height: 30px;
    font-size: .9em;
    background: white;
    text-indent: 1.2em;
    float: right;
    margin-right: 35%;
  }
  .mail,.faceToFace {
    padding: 4px 8px 4px 12px;
    border: rgb(24,152,217) 1px solid;
    background: white;
    color: rgb(24,152,217);
    border-radius: 9px;
    margin-right: 15px;
    position: relative;
    left: -45px;
    &.active {
      background: rgb(24,152,217);
      color: white;
    }
  }
}
</style>
