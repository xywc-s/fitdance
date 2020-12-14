<template>
  <div>
    <div class="text-h3 text-center font-weight-bold">{{title}}</div>
    <div v-if="subtitle" class="text-h5 text-center text-uppercase mt-2">{{subtitle}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: `模 / 块 / 标 / 题`,
      type: String,
      required: true
    },
    subtitle: {
      required: false
    },
  }
}
</script>

<style>
</style>
