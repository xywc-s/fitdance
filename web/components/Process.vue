<template>
  <section id="process">
    <title-com :title="title" :subtitle="subtitle"></title-com>
    <v-row class="d-flex justify-center py-12">
      <v-col v-for="(item,index) in items" :key="index" class="col-md-1">
        <v-img class="image" :src="item.src" aspect-ratio="1"></v-img>
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
      subtitle: 'order process',
      items: [{
        src: '/02.jpg',
        title: '进行沟通',
        subtitle: 'communication'
      }, {
        src: '/02.jpg',
        title: '面料确认',
        subtitle: 'confirm'
      }, {
        src: '/02.jpg',
        title: '款型确认',
        subtitle: 'confirm'
      }, {
        src: '/02.jpg',
        title: '批量生产',
        subtitle: 'production'
      }, {
        src: '/02.jpg',
        title: '质量检查',
        subtitle: 'check'
      }, {
        src: '/02.jpg',
        title: '物流运输',
        subtitle: 'transport'
      }, {
        src: '/02.jpg',
        title: '售后服务',
        subtitle: 'after-sales'
      }]
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
