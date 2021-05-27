<template>
  <section class="container-fuild">
    <f-top-title :title="title" :sub-title="subtitle"></f-top-title>
    <div class="category text-center mt-16">
      <div class="d-flex justify-space-between">
        <div v-for="(image, index) in images">
          <v-img class="image-scale" :src="image" />
          <div class="mt-4 category-title">{{titles[index]}}</div>
        </div>
      </div>
      <div class="border"></div>
    </div>
  </section>
</template>

<script>
const images = [require('../static/home/产品分类01.png'),
require('../static/home/产品分类02.png'),
require('../static/home/产品分类03.png')]
export default {
  data() {
    return {
      title: `产品分类`,
      subtitle: 'class products',
      images,
      titles: ['基础练功服', '蓬蓬裙舞蹈服', '芭蕾裙专区'],
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
  width: 100%;
  z-index: 1;
  .border {
    position: absolute;
    left: -107px;
    top: 173px;
    z-index: -1;
    height: 250px;
    width: 1414px;
    border: 1px solid #ebe9e9;
  }
  .category-title {
    font-size: 26px;
    color: #333;
    font-weight: 600;
  }
}
</style>
