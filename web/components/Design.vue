<template>
  <section id="design" class="col-lg-7 col-md-9 col-sm-11 col-12 mx-auto">
    <title-com :title="title" :subtitle="subtitle" class="py-16"></title-com>
    <v-row class="mb-16">
      <v-col cols="12" class="justify-center mb-8 text-center">
        <span class="text-h5 title">芭蕾tutu裙系列</span>
      </v-col>
      <v-row>
        <v-col cols="3" v-for="i in 4" :key="i">
          <v-img src="/02.jpg" aspect-ratio="0.8"></v-img>
        </v-col>
      </v-row>
    </v-row>

    <v-row>
      <v-col cols="12" class="justify-center mb-8 text-center">
        <span class="text-h5 title">芭蕾tutu裙系列</span>
      </v-col>
      <v-row>
        <v-col cols="3" v-for="i in 4" :key="i">
          <v-img src="/02.jpg" aspect-ratio="0.8"></v-img>
        </v-col>
      </v-row>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: `设 / 计 / 能 / 力`,
      subtitle: 'design can force'
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  background-color: rgb(87, 212, 129, 0.8);
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
}
</style>
