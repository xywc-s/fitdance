<template>
  <section id="factory">
    <title-com :title="title" :subtitle="subtitle" class="py-16"></title-com>
    <v-row no-gutters>
      <v-row class="col-6 d-flex my-2" no-gutters>
        <v-col class="left col-7">
          <v-img src="/02.jpg" height="100%"></v-img>
        </v-col>
        <v-col class="center col-5 d-flex flex-column px-2">
          <v-img src="/02.jpg" width="100%"></v-img>
          <v-img src="/02.jpg" width="100%" class="my-2"></v-img>
          <v-img src="/02.jpg" width="100%"></v-img>
        </v-col>
      </v-row>
      <v-col class="right col-6 my-2">
        <v-img src="/02.jpg" aspect-ratio="1.1"></v-img>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: `工 / 厂 / 能 / 力`,
      subtitle: 'factory can force'
    }
  }
}
</script>
<style lang="scss" scoped>
#factory {
  .left {
    background-color: greenyellow;
  }
  .center {
    background-color: khaki;
  }
  .right {
    background-color: indianred;
  }
}
</style>
