<template>
  <v-app>
    <v-main>
      <f-header></f-header>
      <nuxt />
      <f-footer></f-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  mounted() {
    await this.$store.dispatch('getImages')
  }
}
</script>
