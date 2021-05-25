<template>
  <section id="factory">
    <div class="container-fuild">
      <f-top-title class="mt-16" :title="title" :sub-title="subtitle"></f-top-title>
    </div>
    <div class="factory mt-8">
      <div class="container-fuild d-flex align-center box">
        <div class="video" @click="videoControl">
          <video
            id="video"
            height="267"
            width="400"
            :poster="preloadImg"
            src="../static/home/fitdance.mp4"
          ></video>
          <i v-if="showIcon"></i>
        </div>
        <div class="content white--text px-12 text-justify" v-html="content"></div>
      </div>
    </div>
  </section>
</template>

<script>  
const preloadImg = require('../static/home/video-first.png')
export default {
  data() {
    return {
      title: `工厂能力`,
      subtitle: 'factory capacity',
      showIcon: true,
      video: null,
      preloadImg,
      content: `斐丹丝，集舞蹈服装设计、生产、销售为一体的大型自主品牌企业。</br></br>
                钻研设计、打造二十余载，提供舞蹈服、芭蕾舞蹈服从定样、打样、生产销售一体化服务。用心、用情、用爱，将舞者梦用于制衣，为广大舞者提供了精美绝伦、安全舒适和专业呵护的舞蹈成衣和舞蹈用品。用情制衣、针针见心、用爱出品，件件皆精！</br></br>
                与梦同情，心之大、爱之深、品之珍！`,
    }
  },
  methods: {
    videoControl() {
      console.log(this.video);

      if (this.video.paused) {
        this.video.play()
        this.showIcon = false
      } else {
        this.video.pause()
        this.showIcon = true
      }
    }
  },
  computed: {
    factories() {
      return this.$store.state.factory
    }
  },
  mounted() {
    this.video = document.getElementById('video')
    this.video.onended = () => {
      this.showIcon = true
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  height: 100%;
}
.factory {
  min-width: 1200px;
  height: 344px;
  background-image: url('../static/home/工厂能力背景.png');
  background-position-x: center;
  .video {
    position: relative;
    i {
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -28px;
      margin-left: -28px;
      background-image: url('../static/home/播放.png');
      width: 56px;
      height: 56px;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .content {
    line-height: 1.8;
    letter-spacing: 0.3rem;
  }
}
</style>

