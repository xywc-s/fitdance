<template>
  <section id="design" class="container-fuild">
    <f-top-title :title="title" :sub-title="subtitle"></f-top-title>

    <template v-for="(val, index) in 2">
      <div :id=" index ? 'dancing': 'ballet' " class="pt-8">
        <div class="text-center">
          <span class="text-h6">{{product_title[index]}}</span>
        </div>
        <v-row align="end">
          <v-col cols="2"></v-col>
          <v-col cols="2" v-for="(item,i) in [ballet, dancing][index]" :key="i">
            <v-img :src="item" aspect-ratio="0.8">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
          <v-col cols="2">
            <div class="view-more">
              查看更多
              <span>>></span>
            </div>
          </v-col>
        </v-row>
      </div>
    </template>
  </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      title: `产品展示`,
      subtitle: 'products display',
      product_title: ['芭蕾TUTU裙系列', '舞蹈服 练功服']
    }
  },
  computed: {
    ...mapState(['ballet', 'dancing'])
  }
}
</script>
<style lang="scss" scoped>
.view-more {
  &:hover {
    cursor: pointer;
    color: $c-primary;
  }
}
</style>
