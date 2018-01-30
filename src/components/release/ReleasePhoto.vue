<template>
  <div id='releasePhoto'>
    <span class="head">
      上传照片
    </span>
    <span class="tip">
      点击照片可进行移除操作
    </span>
    <br>
    <span
      class='photoGroup'
    >
      <div
        v-for='(photoSrc,index) of photosSrcs'
        :key="index"
        class='photoRow'
      >
        <img
          :src="photoSrc"
          class="showPhoto"
          @click="removePhoto(index)"
        >
      </div>
    </span>
    <span
      class="choosePhoto"
      v-if="!photosSrcs[2]"
    >
      <img src="../../../static/images/icons/choosePhoto.png">
    </span>
    <input
      type="file"
      id="choosePhoto"
      @change='putPhoto'
      accept="image/*"
      v-if="!photosSrcs[2]"
    >
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  data () {
    return {
      photosSrcs: [],
      photoFiles: []
    }
  },
  methods: {
    putPhoto (e) {
      var fileChooser = document.getElementById("choosePhoto");
      var photo = fileChooser.value;
      var src = window.navigator.userAgent.indexOf("Chrome") >= 1 ||
        window.navigator.userAgent.indexOf("Safari") >= 1 ?
        window.webkitURL.createObjectURL(fileChooser.files[0]) :
        window.URL.createObjectURL(fileChooser.files[0])
      this.photosSrcs.push(src);

      var maxSize = 1024 * 1024; // 1MB
      var file = fileChooser.files[0];

      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        var result = event.target.result;
        if (file.size > maxSize) { //需要压缩
          var img = new Image();
          img.src = result;
          img.onload = () => {
            var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            result = canvas.toDataURL('image/jpeg', 0.2);
            this.photoFiles.push(result);
          }
        }
        else {
          this.photoFiles.push(result);
        }
      }
      setTimeout(() => this.$emit('transferPhotos', this.photoFiles), 300);
    },
    removePhoto (index) {
      var con;
      con = confirm("是否删除照片？");
      if (con == true) {
        this.photosSrcs.splice(index, 1);
        this.photoFiles.splice(index, 1);
      }
    }
  }
}
</script>

<style lang="scss">
#releasePhoto {
  margin-top: 20px;
  margin-bottom: 50px;
  text-align: left;
  .head {
    margin-left: 6%;
    font-size: 1.1em;
  }
  .tip {
    color: rgb(180, 180, 180);
    font-size: 0.6em;
    margin-left: 20px;
  }
  .photoGroup {
    margin-top: 12px;
    padding: 0 0 0 3%;
    height: 90px;
    overflow: hidden;
    width: auto;
    float: left;
    .photoRow {
      display: inline-block;
      width: 84px;
      height: 84px;
      margin: 0 5px;
      border: 2px rgb(120, 120, 120) solid;
      border-radius: 10px;
      overflow: hidden;

      .showPhoto {
        min-height: 84px;
        width: 100%;
      }
    }
  }
  .choosePhoto {
    margin-top: 12px;
    margin-left: 1%;
    border: 2px rgb(120, 120, 120) solid;
    padding: 10px;
    display: inline-block;
    border-radius: 10px;
    float: left;
    img {
      width: 60px;
    }
  }
  #choosePhoto {
    width: 84px;
    height: 84px;
    border: 1px black solid;
    display: block;
    margin: 0 auto;
    border-radius: 10px;
    float: left;
    position: relative;
    left: -84px;
    margin-right: -84px;
    opacity: 0;
  }
  #canvas {
    opacity: 0;
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
  }
}
</style>
