<template>
  <section class="text-center">
    <img class="max-w-100" :src="banner" />
    <div class="container-fuild">
      <FTitle class="image-title">实例展示</FTitle>
    </div>
    <img class="max-w-100" :src="image" />
    <div class="container-fuild text-left">
      <Products title="相关产品" class="my-10"></Products>
    </div>
  </section>
</template>

<script>
const banner = require('../../static/products/pp/banner.png')
const image = require('../../static/products/pp/实例展示.png')

export default {
  data() {
    return {
      banner,
      image
    }
  }
}
</script>

<style lang="scss" scoped>
.image-title {
  position: relative;
  top: 30px;
  height: 0;
}
</style>
