<template>
  <section id="ballet" class="text-center">
    <img class="max-w-100" :src="$route.path === '/ballet'?banner:shoes_banner" />

    <nuxt-child></nuxt-child>
  </section>
</template>

<script>
const banner = require('../static/products/ballet/banner.jpg')
const shoes_banner = require('../static/products/ballet/shoes/banner.png')
export default {
  data() {
    return {
      banner,
      shoes_banner
    }
  }
}
</script>

<style>
</style>
