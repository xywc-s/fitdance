<template>
  <section id="ballet" class="text-center">
    <img class="max-w-100" :src="banner" />

    <nuxt-child></nuxt-child>
  </section>
</template>

<script>
const banner = require('../static/products/ballet/banner.jpg')
export default {
  data() {
    return {
      banner
    }
  }
}
</script>

<style>
</style>
