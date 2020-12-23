<template>
  <section id="case">
    <title-com :title="title" :subtitle="subtitle" class="py-16"></title-com>
    <v-row no-gutters>
      <v-col cols="5" class="d-flex flex-column">
        <v-img :src="cases[0]" aspect-ratio="3"></v-img>
        <v-img :src="cases[1]" aspect-ratio="3"></v-img>
      </v-col>
      <v-col cols="7">
        <v-img :src="cases[2]" aspect-ratio="1.5"></v-img>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: `合 / 作 / 案 / 例`,
      subtitle: 'case example'
    }
  },
  computed: {
    cases() {
      return this.$store.state.case
    }
  }
}
</script>

