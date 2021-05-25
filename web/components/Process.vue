<template>
  <section>
    <v-row class="d-flex justify-center mt-8 mx-16">
      <v-col v-for="(item,index) in process" :key="index" class="px-6">
        <v-img class="image" :src="item.img" aspect-ratio="1">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <div class="text-h6 pt-3 text-center">{{item.title}}</div>
        <div class="text-center text-caption text--disabled">{{item.subtitle}}</div>
      </v-col>
    </v-row>
    <div class="text-center">
      <img :src="arrow"></img>
    </div>
  </section>
</template>

<script>
const arrow = require('../static/home/流程箭头.png')
export default {
  data() {
    return {
      arrow
    }
  },
  computed: {
    process() {
      const items = [{
        title: '订单沟通',
        subtitle: 'communication'
      }, {
        title: '面料确认',
        subtitle: 'confirm'
      }, {
        title: '样板确认',
        subtitle: 'confirm'
      }, {
        title: '批量生产',
        subtitle: 'production'
      }, {
        img: '/02.jpg',
        title: '质量检查',
        subtitle: 'check'
      }, {
        title: '物流运输',
        subtitle: 'transport'
      }, {
        title: '售后服务',
        subtitle: 'after-sales'
      }]
      this.$store.state.process.map((img, index) => {
        this.$set(items[index], 'img', img)
      })
      return items
    }
  }
}
</script>
<style lang="scss" scoped>

  .image {
    border-radius: 50%;
  }

</style>
