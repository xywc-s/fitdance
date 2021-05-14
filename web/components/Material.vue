<template>
  <section id="material" class="container-fuild">
    <f-top-title :title="title" :sub-title="subtitle"></f-top-title>
    <img style="max-width:100%" :src="materials" class="my-6"></img>
  </section>
</template>

<script>
import TitleCom from './TitleCom.vue'
import { mapState } from 'vuex';
export default {
  components: { TitleCom },
  data() {
    return {
      title: '原材料',
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
