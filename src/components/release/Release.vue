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
      @click=''
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

export default {
  components: {
    ReleaseHead,
    ReleasePhoto,
    ReleaseDetail,
    ReleaseBottomNav
  },
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
      photoFiles: []
    }
  },
  methods: {
    getName(name) {
      this.name = name;
    },
    getIntroduction(introduction) {
      this.introduction = introduction;
    },
    getKind(kind) {
      this.kind = kind;
    },
    getDuration(duration) {
      this.duration = duration;
    },
    getMail(mail) {
      this.mail = mail;
    },
    getFaceToFace(faceToFace) {
      this.faceToFace = faceToFace;
    },
    getOriginalPrice(originalPrice) {
      this.originalPrice = originalPrice;
    },
    getPrice(price) {
      this.price = price;
    },
    getPhotos(photos) {
      this.photoFiles = photos;
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
