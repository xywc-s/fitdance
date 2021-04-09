<template>
  <div id="banner">
    <v-img :src="banners[0]" aspect-ratio="3"></v-img>
  </div>
</template>

<script>
export default {
  computed: {
    banners() {
      return this.$store.state.banner
    }
  }
}
</script>

