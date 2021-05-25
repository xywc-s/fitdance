<template>
  <section id="design" class="container-fuild">
    <f-top-title :title="title" :sub-title="subtitle"></f-top-title>

    <template v-for="(val, index) in 2">
      <div :id=" index ? 'dancing': 'ballet' " class="pt-8">
        <div class="text-center">
          <span class="design-title">{{product_title[index]}}</span>
        </div>
        <div class="d-flex justify-space-between mt-4">
          <div v-for="(item,i) in [ballet, dancing][index]" :key="i">
            <v-img :src="item">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </div>
        </div>
        <div class="d-flex justify-end mt-2">
          <div class="view-more">
            查看更多
            <span>>></span>
          </div>
        </div>
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
  border: 1px solid #666;
  width: 277px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  transition: 0.1s all ease-in-out;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: $c-primary;
    border-color: $c-primary;
  }
}
.design-title {
  font-size: 22px;
  letter-spacing: 0.2rem;
}
</style>
