<template>
  <section>
    <FloatBar></FloatBar>
    <div class="text-left container-fuild">
      <FTitle class="mt-12 mb-7">足尖鞋</FTitle>
      <img :src="shoes_1" />
      <div class="text-right">
        <FButton>更多产品</FButton>
      </div>

      <FTitle class="mt-10 mb-7">芭蕾软鞋</FTitle>
      <div class="d-flex align-end box-2">
        <div class="relative z-0">
          <img :src="shoes_2" class="d-block" />
          <div class="absolute tabs z-1 d-flex">
            <div
              :class="['tab py-1 px-3 pointer', {'active': current_id === i}]"
              v-for="i in 4"
              :key="i"
            >{{i}}</div>
          </div>
        </div>
        <div class="d-flex flex-wrap ml-auto" style="width: 530px">
          <div v-for="(val, id) in 4" :key="val" class="relative z-0">
            <img :src="detail_images[id]" class="d-block" />
            <div class="absolute white--text contents z-1 pl-4 pb-4">
              <div class="font-18 mt-3">{{detail_content[id].title}}</div>
              <div class="font-10">{{detail_content[id].sub}}</div>
            </div>
          </div>
        </div>
        <FButton>更多产品</FButton>
      </div>

      <!-- <PromoteCarousel class="my-12"></PromoteCarousel> -->

      <FTitle class="mt-10 mb-7">舞蹈袜</FTitle>
      <div class="relative stock">
        <img :src="shoes_3" class="d-block" />
        <FButton class="btn">了解更多</FButton>
      </div>
      <Products class="my-10" title="相关产品"></Products>
    </div>
  </section>
</template>

<script>
const shoes_1 = require('../../static/products/ballet/shoes/足尖鞋.png')
const shoes_2 = require('../../static/products/ballet/shoes/芭蕾软性.png')
const shoes_3 = require('../../static/products/ballet/shoes/舞蹈袜板块.png')

const detail_images = [
  require('../../static/products/ballet/shoes/细节01.png'),
  require('../../static/products/ballet/shoes/细节02.jpg'),
  require('../../static/products/ballet/shoes/细节03.png'),
  require('../../static/products/ballet/shoes/细节04.jpg')
]

export default {
  data() {
    return {
      current_id: 1,
      shoes_1,
      shoes_2,
      shoes_3,
      detail_images,
      detail_content: [
        {
          title: '亮片装饰',
          sub: '精致牢固，大方美观'
        }, {
          title: '交叉松紧带',
          sub: '弹性十足，便于穿脱'
        }, {
          title: '耐磨皮革底',
          sub: '凭证柔软，舒适耐磨'
        }, {
          title: '细腻走线',
          sub: '走线均匀，做工精细'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.box-2 {
  .tabs {
    right: 0;
    top: 0;
    border: 1px solid $c-primary;
    .tab {
      color: $c-primary;
      background-color: white;
      &:not(:last-child) {
        border-right: 1px solid $c-primary;
      }
      &.active {
        color: white;
        background-color: $c-primary;
      }
    }
  }
  .contents {
    z-index: 1;
    left: 0;
    right: 0;
    bottom: 0;
    height: 74px;
    transition: all 0.2s ease-in;
    &:hover {
      background-color: $c-primary;
      height: 104px;
    }
  }
}

.stock {
  .btn {
    position: absolute;
    bottom: 0;
    right: 55px;
  }
}
</style>
