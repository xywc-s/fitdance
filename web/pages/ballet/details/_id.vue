<template>
  <section class="box ml-10">
    <div class="d-flex my-10">
      <div>
        <img :src="mainImage" class="d-block" />
        <div class="d-flex align-center mt-5">
          <div class="arrow text-center">
            <img src="~static/products/detail/箭头左.png" />
          </div>
          <div>
            <img class="thumbnail" :src="item" v-for="(item, i) in thumbnail" :key="i" />
          </div>
          <div class="arrow text-center">
            <img src="~static/products/detail/箭头右.png" />
          </div>
        </div>
      </div>
      <div class="ml-5 color-3">
        <div class="font-weight-bold mt-4">新款纯手工定制宝石红芭蕾裙</div>
        <div class="font-12 mt-5" style="line-height:20px">
          <div>商品货号：AL-T21001</div>
          <div>商品尺寸：S/M/L/XL/XXL</div>
          <div>颜色分类：</div>
        </div>
        <div class="btn text-center font-12 mb-7 mt-12">联系我们</div>
        <div>
          <img v-for="(icon,i) in icons" :src="icon" :key="i" class="mr-1" />
        </div>
      </div>
    </div>
    <div class="detail-title px-5">产品详情</div>
    <div class="color-3">
      <div class="font-18 font-weight-bold text-center my-6">新款纯手工定制宝石红芭蕾裙</div>
      <div
        class="font-13 mb-3 text-justify"
      >新款纯手工定制宝石红芭蕾裙，是我们主推的产品之一，通过拼接工艺，纯手工镶嵌，裙盘采用渐变色打造出高贵质感，整体上给人以端庄而优雅的印象。</div>
      <img :src="image" v-for="(image,i) in details" :key="i" class="mb-3 mr-3" />
      <div class="color-3 font-14" style="line-height: 30px;">
        <div class="font-weight-bold font-16">产品参数：</div>
        <div>面料：丝绒+硬网</div>
        <div>颜色：宝石红</div>
        <div>尺码：儿童（120-140）； 成人（150-170）</div>
        <div>交货时间：7-15天</div>
        <div>包装：50*40*30cm（单件）</div>
        <div>运送方式：支持快递·海运·陆运·空运</div>

        <div class="font-weight-bold font-16 mt-3">专业芭蕾裙的优势：</div>
        <div>1.所有装饰和水钻都是手工切割和排列，每一件都是独一无二的；</div>
        <div>2.全裙根据芭蕾裙尺寸进行调整，保证丰满度和重量的统一；</div>
        <div>3.背部采用搭扣设计，可根据您的需要进行调整。-140）； 成人（150-170）</div>
      </div>
      <div class="bottom-btn mt-5">我要询盘</div>
    </div>
  </section>
</template>

<script>
const mainImage = require('../../../static/products/ballet/details/芭蕾主图.png')
const thumbnail = [
  require('../../../static/products/ballet/details/芭蕾产品小图01.png'),
  require('../../../static/products/ballet/details/芭蕾产品小图02.png'),
  require('../../../static/products/ballet/details/芭蕾产品小图03.png')
]
const icons = [
  require('../../../static/products/detail/QQ.png'),
  require('../../../static/products/detail/微信.png'),
  require('../../../static/products/detail/电话.png'),
  require('../../../static/products/detail/邮箱.png')
]
const details = [
  require('../../../static/products/ballet/details/芭蕾详情01.png'),
  require('../../../static/products/ballet/details/芭蕾详情02.png'),
  require('../../../static/products/ballet/details/芭蕾详情03.png'),
  require('../../../static/products/ballet/details/芭蕾详情04.png'),
  require('../../../static/products/ballet/details/芭蕾详情05.png'),
  require('../../../static/products/ballet/details/芭蕾详情06.png')
]
export default {
  data() {
    return {
      mainImage,
      thumbnail,
      icons,
      details
    }
  },
}
</script>

<style lang="scss" scoped>
.box {
  border-top: 2px solid $c-primary;
  .arrow {
    color: #bbb;
    width: 50px;
    &:hover {
      cursor: pointer;
    }
  }
  .thumbnail {
    &:not(:last-child) {
      margin-right: 36px;
    }
  }
  .detail-title {
    height: 40px;
    line-height: 40px;
    background-color: $c-primary;
    color: white;
  }
  .btn {
    width: 103px;
    height: 30px;
    line-height: 30px;
    background-color: $c-primary;
    color: white;
    &:hover {
      cursor: pointer;
    }
  }
  .bottom-btn {
    font-size: 14px;
    width: 290px;
    height: 45px;
    line-height: 45px;
    color: $c-primary;
    background-color: $c-bg-gray;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
