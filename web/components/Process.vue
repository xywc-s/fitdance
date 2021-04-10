<template>
  <section id="process">
    <title-com :title="title" :subtitle="subtitle"></title-com>
    <v-row class="d-flex justify-center py-12">
      <v-col v-for="(item,index) in process" :key="index" class="col-md-1">
        <v-img class="image" :src="item.img" lazy-src="/02.jpg" aspect-ratio="1">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <div class="text-h5 pt-3 text-center">{{item.title}}</div>
        <div class="text-center">{{item.subtitle}}</div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: `芭蕾裙定制流程`,
      subtitle: 'order process'
    }
  },
  computed: {
    process() {
      const items = [{
        title: '进行沟通',
        subtitle: 'communication'
      }, {
        title: '面料确认',
        subtitle: 'confirm'
      }, {
        title: '款型确认',
        subtitle: 'confirm'
      }, {
        title: '批量生产',
        subtitle: 'production'
      }, {
        src: '/02.jpg',
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
#process {
  .image {
    border-radius: 50%;
  }
}
</style>
