<template>
  <div id="banner" class="text-center">
    <v-carousel
      cycle
      interval="3500"
      height="auto"
      hide-delimiter-background
      :show-arrows="false"
      :show-arrows-on-hover="true"
    >
      <v-carousel-item v-for="(banner, i) in banners" :key="i">
        <img style="max-width: 1920px; min-width:1200px; width:100%" :src="banner" />
      </v-carousel-item>
    </v-carousel>
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
<style lang="scss" scoped>
#banner {
  min-width: 1200px;
}
</style>

