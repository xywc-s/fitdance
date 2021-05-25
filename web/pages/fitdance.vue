<template>
  <section id="fitdance" class="text-center">
    <img class="banner" :src="banner" />
    <div class="container-fuild text-left">
      <f-title class="my-12">关于我们</f-title>
      <div class="d-flex justify-center">
        <div class="d-flex flex-column justify-space-between mr-16" style="margin-left: 100px">
          <div>
            <span class="primary-title">实力展示/</span>
            <span class="sub-title">研 · 产 · 销一体，严格把控质量</span>
          </div>
          <div class="content line-height-15" v-html="content"></div>
          <div style="line-height:0">
            <img :src="divider" class="mb-1">
          </div>
          <div class="content" v-html="sub_content"></div>
          <div class="text-right">
            <f-button>业务洽谈</f-button>
          </div>
        </div>
        <img :src="about"></img>
      </div>
      <f-title class="my-12">企业文化</f-title>
      <div class="d-flex mb-12">
        <img :src="culture"></img>
        <div class="d-flex flex-column ml-16">
          <Culture class="pt-4 pb-6" :icon="false"></Culture>
          <div>
            <f-button>业务洽谈</f-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const banner = require('../static/fitdance/banner.png')
const divider = require('../static/fitdance/关于我们分界线.png')
const about = require('../static/fitdance/关于我们图片.png')
const culture = require('../static/fitdance/企业文化图片.png')
export default {
  data() {
    return {
      banner,
      about,
      culture,
      divider,
      content: `生产基地拥有国际先进的加工设备和技术，多年设计经验的专业服装设计师，选用优质面料为原材料，制造芭蕾舞短裙，芭蕾舞裙，芭蕾舞裙，紧身连衣裤，煎饼短裙和其他舞蹈服装。 以及芭蕾舞鞋，芭蕾舞连裤袜等配件。
      </br></br>
      我们的产品远销海外北美，俄罗斯，澳大利亚，加拿大，日本，韩国等许多国家和地区。`,
      sub_content: `根据消费者需求，可定制款式、颜色、尺寸、logo等多要求服装，具体请联系咨询。
`
    }
  },
  computed: {
    banners() {
      return this.$store.state.banner
    }
  }
}
</script>

<style lang="scss" scoped>
.primary-title {
  @extend .font-26, .color-6, .letter-space-1;
}
.sub-title{
  @extend .font-18, .color-6;
}
.content{
  @extend .font-14, .color-9;
}
</style>
