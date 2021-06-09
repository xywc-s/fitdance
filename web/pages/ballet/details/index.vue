<template>
  <section class="box ml-10">
    <div class="font-26 color-3 font-weight-bold mt-8" style="letter-spacing:2px">经典芭蕾</div>
    <div class="color-3 mb-3">高端定制，纯手工打造</div>
    <div class="list d-flex pa-5" v-for="(product, i) in products" :key="i">
      <img :src="product" class="d-block" />
      <div class="ml-4 color-3">
        <div class="font-weight-bold mt-4">蓝色芭蕾裙</div>
        <div class="font-12 mt-5" style="line-height:20px">
          <div>商品货号：AL-T21001</div>
          <div>商品尺寸：S/M/L/XL/XXL</div>
          <div>颜色分类：</div>
        </div>
        <div class="d-flex text-center font-14 mt-12">
          <div class="btn mr-3" @click="viewDetail()">查看更多</div>
          <div class="btn" @click="()=> $router.push('/about')">联系我们</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const products = [
  require('../../../static/products/ballet/details/经典芭蕾01.png'),
  require('../../../static/products/ballet/details/经典芭蕾02.png'),
  require('../../../static/products/ballet/details/经典芭蕾03.png'),
  require('../../../static/products/ballet/details/经典芭蕾04.png')
]
export default {
  data() {
    return {
      products
    }
  },
  methods: {
    viewDetail() {
      this.$router.push('/ballet/details/1');
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  border-top: 2px solid $c-primary;
  .list {
    border-bottom: 1px solid $c-border;
    .btn {
      width: 122px;
      height: 45px;
      line-height: 45px;
      background-color: $c-primary;
      color: white;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
