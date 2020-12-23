<template>
  <section id="material">
    <title-com :title="title" :subtitle="subtitle" class="py-16"></title-com>
    <v-img :src="materials" aspect-ratio="2.4"></v-img>
  </section>
</template>

<script>
import TitleCom from './TitleCom.vue'
import { mapState } from 'vuex';
export default {
  components: { TitleCom },
  data() {
    return {
      title: '原 / 材 / 料',
      subtitle: 'the original materials'
    }
  },
  computed: {
    ...mapState(['materials'])
  }
}
</script>

<style>
</style>
