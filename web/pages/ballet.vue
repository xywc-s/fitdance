<template>
  <section id="ballet">
    <img class="max-w-100" :src="banner" />
  </section>
</template>

<script>
const banner = require('../static/products/ballet/banner.png')

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
