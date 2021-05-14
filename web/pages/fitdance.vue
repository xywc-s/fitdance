<template>
  <section id="fitdance" class="text-center">
    <img class="mx-auto" style="max-width:100%;" :src="banners[0]" />
    <div class="container-fuild px-16">
      <f-title>关于我们</f-title>
      <f-button>业务洽谈</f-button>
    </div>
  </section>
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

<style>
</style>
