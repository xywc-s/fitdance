<template>
  <section id="ballet" class="text-center">
    <img class="max-w-100" :src="banner" />
    <div class="container-fuild">
      <FTitle class="mt-12">热门产品</FTitle>
      <v-row no-gutters class="relative mt-4" style="z-index:1">
        <v-col>
          <img src="../static/products/ballet/蓝色芭蕾裙01.png" class="d-block" />
        </v-col>
        <v-col class="d-flex flex-column justify-end pl-5">
          <div class="text-left">
            <div class="font-22 color-3 mb-2">蓝色芭蕾舞裙</div>
            <div class="font-14 color-6 mb-4">松紧腰身和抽绳设计，背部搭扣，9-11层裙边叠加</div>
          </div>
          <div class="d-flex justify-space-between">
            <img src="../static/products/ballet/蓝色芭蕾裙02.png" class="d-block" />
            <img src="../static/products/ballet/蓝色芭蕾裙03.png" class="d-block" />
          </div>
        </v-col>
        <div class="bg-border"></div>
      </v-row>
      <v-row no-gutters class="relative mt-10" style="z-index:1">
        <v-col class="d-flex flex-column justify-end pr-5">
          <div class="text-right">
            <div class="font-22 color-3 mb-2">红色芭蕾舞裙</div>
            <div class="font-14 color-6 mb-4">松紧腰身和抽绳设计，背部搭扣，9-11层裙边叠加</div>
          </div>
          <div class="d-flex justify-space-between">
            <img src="../static/products/ballet/红色芭蕾裙01.png" class="d-block" />
            <img src="../static/products/ballet/红色芭蕾裙02.png" class="d-block" />
          </div>
        </v-col>
        <v-col>
          <img src="../static/products/ballet/红色芭蕾裙03.png" class="d-block" />
        </v-col>
        <div class="bg-border"></div>
      </v-row>

      <section class="mt-12">
        <div>
          <FTitle>专业芭蕾舞裙</FTitle>
          <div class="d-flex flex-wrap justify-space-between mt-4">
            <img v-for="(image, i) in products" :src="image" :key="i" class="mb-3" />
          </div>
        </div>
      </section>

      <section class="mt-12">
        <FTitle>展会实拍</FTitle>
        <div class="relative live-shot font-12 color-6 text-left">
          <img class="max-w-100" src="../static/products/ballet/liveshot/展会底部.png" />
          <div class="text-r">
            <div>芭蕾舞</div>
            <div>孕育于十四世纪,意大利文艺复兴时期，降生在十七世纪后期路易十四的法国宫廷</div>
          </div>
          <div class="photo d-flex justify-end text-right">
            <div class="mr-11">
              <img src="../static/products/ballet/liveshot/展会实拍01.png" />
              <div class="mt-10 mb-12">
                <span
                  class="d-inline-block text-justify text-left mr-5"
                  style="width:360px"
                >著名芭蕾舞剧：《天鹅湖》、《胡桃夹子》、《罗密欧与朱丽叶》、《吉赛尔》、《舞姬》等</span>
              </div>
              <img class="pb-4" src="../static/products/ballet/liveshot/展会实拍03.png" />
              <img class="mt-16 pt-8" src="../static/products/ballet/liveshot/展会实拍05.png" />
            </div>
            <div class="d-flex flex-column">
              <img src="../static/products/ballet/liveshot/展会实拍02.png" />
              <img class="mt-16 pt-16" src="../static/products/ballet/liveshot/展会实拍04.png" />
            </div>
          </div>
          <div class="text-b">
            <div>芭蕾，于法国发展流行并逐渐职业化，十八世纪在法国日臻完美，到十九世纪末期，在俄罗斯进入最繁荣的时代</div>
          </div>
        </div>
      </section>

      <Products class="my-10" title="相关产品"></Products>

      <Partners></Partners>
    </div>
  </section>
</template>

<script>
const banner = require('../static/products/ballet/banner.png')
const products = [
  require('../static/products/ballet/show/产品01.png'),
  require('../static/products/ballet/show/产品02.png'),
  require('../static/products/ballet/show/产品03.png'),
  require('../static/products/ballet/show/产品04.png'),
  require('../static/products/ballet/show/产品05.png'),
  require('../static/products/ballet/show/产品06.png'),
  require('../static/products/ballet/show/产品07.png'),
  require('../static/products/ballet/show/产品08.png'),
  require('../static/products/ballet/show/产品09.png'),
  require('../static/products/ballet/show/产品10.png'),
  require('../static/products/ballet/show/产品11.png'),
  require('../static/products/ballet/show/产品12.png'),
]

export default {
  data() {
    return {
      banner,
      products
    }
  }
}
</script>
<style lang="scss" scoped>
.hot-title {
  font-size: 22px;
}
.bg-border {
  position: absolute;
  left: -67px;
  bottom: 40px;
  width: 1333px;
  height: 157px;
  border: 1px solid #999;
  z-index: -1;
}
.live-shot {
  .text-r {
    position: absolute;
    transform: rotate(90deg);
    transform-origin: top left;
    right: -360px;
    top: 90px;
  }
  .text-b {
    position: absolute;
    right: 132px;
    bottom: 172px;
    width: 410px;
  }
  .photo {
    position: absolute;
    top: 90px;
    right: 163px;
  }
}
</style>
