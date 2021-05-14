<template>
  <section class="container-fuild">
    <f-top-title :title="title" :sub-title="subtitle"></f-top-title>
    <div class="category text-center mt-8 mx-auto">
      <div class="d-flex justify-center">
        <div class="mx-3" v-for="(image, index) in images">
          <v-img :src="image" />
          <div>{{titles[index]}}</div>
        </div>
      </div>
      <div class="border"></div>
    </div>
  </section>
</template>

<script>
const images = [require('../static/home/练功服专区.png'),
require('../static/home/蓬蓬裙专区.png'),
require('../static/home/芭蕾裙专区.png')]
export default {
  data() {
    return {
      title: `产品分类`,
      subtitle: 'class products',
      images,
      titles: ['基础练功服', '蓬蓬裙舞蹈服', '芭蕾裙专区'],
      categories: [{
        name: '披肩外套',
        path: '/category/coat',
        level: 4,
        img: '/category_1.png'
      }, {
        name: '舞蹈鞋',
        path: '/category/shoes',
        level: 5,
        img: '/category_2.png'
      }, {
        name: '舞蹈袜',
        path: '/category/socks',
        level: 6,
        img: '/category_3.png'
      }, {
        name: '舞蹈配饰',
        path: '/category/accessories',
        level: 7,
        img: '/category_4.png'
      }]
    }
  },
  computed: {
    category() {
      return this.$store.state.category
    }
  }
}
</script>

<style lang="scss" scoped>
.category {
  position: relative;
  width: 950px;
  z-index: 1;
  .border {
    position: absolute;
    left: 0;
    top: 100px;
    z-index: -1;
    height: 167px;
    width: 100%;
    border: 1px solid #ebe9e9;
  }
}
</style>
