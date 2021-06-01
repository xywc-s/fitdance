<template>
  <section class="text-center">
    <img class="max-w-100" :src="banner" />

    <section class="tights container-fuild text-left">
      <FTitle class="mt-12 mb-5">练功服-紧身衣</FTitle>
      <div class="relative">
        <img :src="tights[0]" />
        <div class="right-box text-right">
          <div class="mb-5">
            <FButtonText>了解详情</FButtonText>
          </div>
          <div class="d-flex">
            <div>
              <img :src="tights[1]" class="d-block" />
              <img :src="tights[2]" class="d-block" />
            </div>
            <div>
              <img :src="tights[3]" class="d-block" />
              <div class="text-left content">
                <div class="pt-6" style="letter-spacing: 2px;">儿童女夏吊带练功服</div>
                <div class="font-12">多种款式及颜色可选，为孩子的舞蹈梦不断创新。</div>
              </div>
            </div>
          </div>
        </div>
        <FButtonText class="absolute btn">了解详情</FButtonText>
      </div>
    </section>

    <section class="container-fuild">
      <div class="d-flex justify-space-between align-end mt-12 mb-5">
        <FTitle>产品展示</FTitle>
        <FButtonText>更多产品</FButtonText>
      </div>
      <img :src="product_show" />
    </section>

    <section class="container-fuild">
      <FTitle class="mt-12 mb-5">热销商品</FTitle>
      <v-row no-gutters>
        <v-col :cols="12" class="d-flex" v-for="(i, id) in 2" :key="id">
          <div>
            <img :src="hot_sales[id*3]" class="d-block" style />
          </div>
          <img :src="hot_sales[id*3+1]" class="d-block mt-12 mx-3" />
          <div>
            <img :src="hot_sales[id*3+2]" class="d-block" />
            <img v-if="id" :src="btn_knowmore" class="d-block mt-2 pointer" />
          </div>
        </v-col>
      </v-row>
    </section>

    <div class="mx-auto mt-12 divider">
      <div class="container-fuild py-12">
        <v-row class="mx-auto" style="width:80%">
          <v-col v-for="{number, unit, sub} in $store.state.datas" :key="sub">
            <div>
              <span class="color-3" style="font-size:40px">{{number}}</span>
              <span class="color-9" style="font-size:19px">{{unit}}</span>
            </div>
            <div class="color-9">{{sub}}</div>
          </v-col>
        </v-row>
      </div>
    </div>

    <section class="container-fuild text-left">
      <FTitle class="mt-12 mb-5">蓬蓬裙优势</FTitle>
      <div class="advantage d-flex">
        <div>
          <div class="d-flex">
            <img :src="bubble_skirts_advantage[0]" />
            <div class="d-flex flex-column justify-end px-8 white--text top-content">
              <div class="font-20">蓬蓬裙</div>
              <div class="font-14 my-2">适用于生活、表演、舞蹈训练等多场景穿搭</div>
              <div
                class="font-10 my-6"
                style="width: 365px; line-height: 2em"
              >欧洲蓬蓬裙诞生于十八世纪，在十八世纪中期，由于玛丽安东瓦内特王后的大力追捧，一时蓬蓬裙在法国乃至欧洲流行起来。</div>
              <div class="mt-10 font-12">
                <FButtonText class="mb-8">了解更多</FButtonText>
              </div>
            </div>
            <div class="d-flex flex-column">
              <div
                class="grey darken-1 font-10 white--text text-justify px-2 py-3"
                style="width: 152px; height: 153px"
              >一直以来，蓬蓬裙深受人们喜爱。无论是日常穿着，还是舞蹈训练及集体表演，蓬蓬裙一直以阳光可爱、充满活力、美观舒适等优势，受到大众的欢迎。</div>
              <!-- <img :src="icon_umbrella" /> -->
              <div class="color-bg-gray flex-grow-1 d-flex justify-center align-center">
                <img :src="icon_umbrella" class="d-block" />
              </div>
            </div>
          </div>
          <div>
            <div class="color-bg-gray ml-auto" style="width: 275px">
              <img :src="bubble_skirts_advantage[2]" class="d-block ml-auto" />
            </div>
          </div>
        </div>
        <div class="text-right flex-grow-1 d-flex flex-column">
          <div style="height: 153px" class="d-flex align-end justify-end">
            <img :src="btn_bubble_skirt" class="mb-2 pointer" />
          </div>
          <div class="color-bg-gray flex-grow-1">
            <div class="text-left">
              <img :src="bubble_skirts_advantage[1]" class="d-block" />
            </div>
            <div
              class="font-10 text-right mr-3 relative"
              style="color: #c1bfbf; top: 90px;line-height:20px"
            >
              <div>FITDANCE 翡丹丝</div>
              <div>专注舞蹈服、芭蕾舞服设计、生产、销售一体化服务</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container-fuild">
      <div class="d-flex justify-space-between mt-12 mb-7">
        <FTitle>蓬蓬裙展示</FTitle>
        <img :src="btn_bubble_skirt" class="pointer" />
      </div>
      <div>
        <div
          :class="['d-flex justify-space-between', {'mt-3': id}]"
          v-for="(block, id) in 2"
          :key="block"
        >
          <img
            class="image-scale"
            :src="bubble_skirts[4*id+index]"
            v-for="(item, index) in 4"
            :key="block+'_'+index"
          />
        </div>
      </div>
    </section>

    <section class="container-fuild dress">
      <FTitle class="mt-12 mb-5">连体裙</FTitle>
      <div class="d-flex justify-space-between">
        <img class="image-scale" :src="dress[i-1]" v-for="i in 3" :key="i" />
      </div>
      <div class="d-flex justify-end align-end mt-3">
        <img class="image-scale" :src="dress[3]" />
        <img class="image-scale mx-3" :src="dress[4]" />
        <img class="pointer" :src="btn_more_products" />
      </div>
      <div class="bottom mt-12 relative">
        <div class="content text-left font-14 color-6">
          <div class="color-3 font-26">
            <span class="d-inline-block" style="letter-spacing: 4px">斐丹丝</span>
            <span class="d-inline-block">-</span>
            <span class="d-inline-block font-20">FITDANCE</span>
          </div>
          <div class="mt-2 mb-6">专注舞蹈服饰21年</div>
          <div>
            <div>21年来，翡丹丝始终专注于舞蹈服装的设计和生产，无论是练功服、紧身衣、表演服、芭蕾服、舞蹈鞋袜及舞蹈配饰， 严格把关产品品质，将客户满意度置于首位。</div>
            <div>始于设计，终于售后。</div>
            <div>相比于生意，我们更在乎合作，相比于订单，我们更看重伙伴。</div>
          </div>
        </div>
        <FButton class="btn">业务咨询</FButton>
      </div>
    </section>

    <div class="container-fuild text-left mt-14">
      <Products title="相关产品" class="mb-10"></Products>
    </div>
  </section>
</template>

<script>
const banner = require('../../static/products/dancing/banner.png')
const product_show = require('../../static/products/dancing/show.png')
const tights = [
  require('../../static/products/dancing/tights/练功服01.png'),
  require('../../static/products/dancing/tights/练功服02.png'),
  require('../../static/products/dancing/tights/练功服03.png'),
  require('../../static/products/dancing/tights/练功服04.png')
]
const hot_sales = [
  require('../../static/products/dancing/hot_sales/热销01.png'),
  require('../../static/products/dancing/hot_sales/热销02.png'),
  require('../../static/products/dancing/hot_sales/热销03.png'),
  require('../../static/products/dancing/hot_sales/热销04.png'),
  require('../../static/products/dancing/hot_sales/热销05.png'),
  require('../../static/products/dancing/hot_sales/热销06.png')
]
const bubble_skirts = [
  require('../../static/products/dancing/bubble_skirt/蓬蓬裙展示01.png'),
  require('../../static/products/dancing/bubble_skirt/蓬蓬裙展示02.png'),
  require('../../static/products/dancing/bubble_skirt/蓬蓬裙展示03.png'),
  require('../../static/products/dancing/bubble_skirt/蓬蓬裙展示04.png'),
  require('../../static/products/dancing/bubble_skirt/蓬蓬裙展示05.png'),
  require('../../static/products/dancing/bubble_skirt/蓬蓬裙展示06.png'),
  require('../../static/products/dancing/bubble_skirt/蓬蓬裙展示07.png'),
  require('../../static/products/dancing/bubble_skirt/蓬蓬裙展示08.png')
]
const bubble_skirts_advantage = [
  require('../../static/products/dancing/bubble_skirt/蓬蓬裙优势01.png'),
  require('../../static/products/dancing/bubble_skirt/蓬蓬裙优势02.png'),
  require('../../static/products/dancing/bubble_skirt/蓬蓬裙优势03.png')
]
const dress = [
  require('../../static/products/dancing/dress/连体裙01.png'),
  require('../../static/products/dancing/dress/连体裙02.png'),
  require('../../static/products/dancing/dress/连体裙03.png'),
  require('../../static/products/dancing/dress/连体裙04.png'),
  require('../../static/products/dancing/dress/连体裙05.png')
]

const btn_knowmore = require('../../static/products/dancing/hot_sales/了解更多.png')
const btn_bubble_skirt = require('../../static/products/dancing/bubble_skirt/蓬蓬裙专区.png')
const btn_more_products = require('../../static/products/dancing/dress/更多产品.png')
const icon_umbrella = require('../../static/products/dancing/bubble_skirt/icon.png')

export default {
  data() {
    return {
      banner,
      tights,
      product_show,
      hot_sales,
      bubble_skirts,
      dress,
      bubble_skirts_advantage,
      btn_knowmore,
      btn_bubble_skirt,
      btn_more_products,
      icon_umbrella
    }
  }
}
</script>

<style lang="scss" scoped>
.tights {
  .right-box {
    display: inline-block;
    position: absolute;
    bottom: 6px;
    right: 0;
  }
  .btn {
    left: 25px;
    bottom: 25px;
  }
  .content {
    width: 300px;
    height: 142px;
    padding: 0 30px;
    background-color: $c-primary;
    color: white;
    line-height: 30px;
  }
}
.divider {
  min-width: 1200px;
  max-width: 1920px;
  background-image: url('~static/products/dancing/拦腰背景.png');
}

.advantage {
  z-index: 1;
  .top-content {
    background-color: $c-primary;
  }
  .bottom-content {
    right: 0;
    top: 0;
    bottom: 0;
    width: 573px;
    z-index: -1;
  }
}

.dress {
  .bottom {
    height: 437px;
    background-image: url('../../static/products/dancing/翡丹丝FITDANCE-背景.png');
    background-position-x: 100px;
    .content {
      width: 716px;
      position: absolute;
      top: 100px;
      right: 0;
      letter-spacing: 1px;
      line-height: 24px;
    }
    .btn {
      position: absolute;
      bottom: 40px;
      right: 0;
      padding: 8px 100px;
    }
  }
}
</style>
