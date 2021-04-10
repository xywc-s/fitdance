<template>
  <section id="design" class="col-lg-7 col-md-9 col-sm-11 col-12 mx-auto">
    <title-com :title="title" :subtitle="subtitle" class="py-16"></title-com>
    <v-row id="ballet" class="mb-16">
      <v-col cols="12" class="justify-center mb-8 text-center">
        <span class="text-h5 title">芭蕾tutu裙系列</span>
      </v-col>
      <v-row>
        <v-col cols="3" v-for="(item,i) in ballet" :key="i">
          <v-img :src="item" aspect-ratio="0.8">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-row>

    <v-row id="dancing">
      <v-col cols="12" class="justify-center mb-8 text-center">
        <span class="text-h5 title">舞蹈服 练功服</span>
      </v-col>
      <v-row>
        <v-col cols="3" v-for="(item,i) in dancing" :key="i">
          <v-img :src="item" aspect-ratio="0.8">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-row>
  </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      title: `设 / 计 / 能 / 力`,
      subtitle: 'design can force'
    }
  },
  computed: {
    ...mapState(['ballet', 'dancing'])
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
