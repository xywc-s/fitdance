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
  data() {
    return {
      fixed: true,
    }
  }
}
</script>
<style lang="scss">
.main-wrapper {
  background-color: #fafafa;
}
</style>
