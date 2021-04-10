<template>
  <div id="banner">
    <v-carousel
      cycle
      interval="3500"
      height="auto"
      hide-delimiter-background
      :show-arrows="false"
      :show-arrows-on-hover="true"
    >
      <v-carousel-item v-for="(banner, i) in banners" :key="i">
        <v-img :src="banner" aspect-ratio="3">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
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

