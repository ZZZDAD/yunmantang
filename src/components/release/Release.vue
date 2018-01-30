<template>
  <div id="release">
    <ReleaseHead></ReleaseHead>
    <ReleaseDetail
      @transferName='getName'
      @transferIntroduction='getIntroduction'
      @transferKind='getKind'
      @transferDuration='getDuration'
      @transferMail='getMail'
      @transferFaceToFace='getFaceToFace'
      @transferOriginalPrice='getOriginalPrice'
      @transferPrice='getPrice'
    ></ReleaseDetail>
    <ReleasePhoto
      @transferPhotos='getPhotos'
    ></ReleasePhoto>
    <button
      class="releaseButton"
      @click='release'
    >
      发布
    </button>
    <ReleaseBottomNav></ReleaseBottomNav>
  </div>
</template>

<script>
import ReleaseHead from './ReleaseHead.vue'
import ReleasePhoto from './ReleasePhoto.vue'
import ReleaseDetail from './ReleaseDetail.vue'
import ReleaseBottomNav from './ReleaseBottomNav.vue'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  /*computed: {
    ...mapState([
      "count"
    ])
  },*/
  components: {
    ReleaseHead,
    ReleasePhoto,
    ReleaseDetail,
    ReleaseBottomNav
  },
  data () {
    return {
      item: {
        name: '',
        introduction: '',
        kind: '',
        duration: '',
        mail: 0,
        faceToFace: 0,
        originalPrice: 0,
        price: '',
        photoFiles: []
      }
    }
  },
  methods: {
    getName(name) {
      this.item.name = name;
    },
    getIntroduction(introduction) {
      this.item.introduction = introduction;
    },
    getKind(kind) {
      this.item.kind = kind;
    },
    getDuration(duration) {
      this.item.duration = duration;
    },
    getMail(mail) {
      this.item.mail = mail;
    },
    getFaceToFace(faceToFace) {
      this.item.faceToFace = faceToFace;
    },
    getOriginalPrice(originalPrice) {
      this.item.originalPrice = originalPrice;
    },
    getPrice(price) {
      this.item.price = price;
    },
    getPhotos(photos) {
      this.item.photoFiles = photos;
    },
    //...mapMutations(["release"])
    release() {
      // var item = this.item;
      // if(item.name && item.introduction
      //   && item.kind && item.duration
      //   && item.price && item.photoFiles[0]) {
      //   this.$store.commit("release",item);
      // }
      // else alert("请输入完整信息");
      this.$store.dispatch('GetUser')
    }
  }
}
</script>

<style lang="scss">
#release {
  .releaseButton {
    background: rgb(24,152,217);
    padding: 10px 30px;
    color: white;
    border-radius: 10px;
    display: block;
    margin: 130px auto 70px;
  }
}
</style>
