<template>
  <section class="box ml-10">
    <div class="d-flex my-10">
      <div>
        <v-img
          :src="mainImage"
          :lazy-src="mainImage"
          aspect-ratio="1"
          width="340px"
          max-width="340px"
        />
        <div class="d-flex align-center mt-5" style="max-width: 340px;">
          <div class="arrow text-center" @click="changeImage('prev')">
            <img src="~static/products/detail/箭头左.png" />
          </div>
          <div style="width: 240px; overflow: hidden;">
            <div class="thumbnail-box" :style="`transform: translateX(${translateX}px)`">
              <img
                class="thumbnail"
                :src="image.src"
                v-for="(image, i) in product.images"
                :key="i"
                @click="changeImage(image)"
              />
            </div>
          </div>
          <div class="arrow text-center" @click="changeImage('next')">
            <img src="~static/products/detail/箭头右.png" />
          </div>
        </div>
      </div>
      <div class="ml-5 color-3">
        <div class="font-weight-bold mt-4">{{product.title}}</div>
        <div class="font-12 mt-5" style="line-height:20px">
          <div v-for="(attr, index) in product.attrs" :key="index">{{attr}}</div>
        </div>
        <div class="btn text-center font-12 mb-7 mt-12" @click="()=> $router.push('/about')">联系我们</div>
        <div>
          <img v-for="(icon,i) in icons" :src="icon" :key="i" class="mr-1" />
        </div>
      </div>
    </div>
    <div class="detail-title px-5">产品详情</div>
    <div class="color-3">
      <div v-html="product.details"></div>
      <div class="bottom-btn mt-5" @click="()=> $router.push('/about')">我要询盘</div>
    </div>
  </section>
</template>

<script>
const icons = [
  require('../../../../static/products/detail/QQ.png'),
  require('../../../../static/products/detail/微信.png'),
  require('../../../../static/products/detail/电话.png'),
  require('../../../../static/products/detail/邮箱.png')
]

import { mapState } from 'vuex'
export default {
  async asyncData({ params, $api }) {
    const res = await $api.getProduct(params.id)
    const product = res.data
    return { product }
  },
  data() {
    return {
      icons,
      mainImage: '',
      translateX: 0
    }
  },
  computed: {
    ...mapState([]),
  },
  head() {
    const { seo_title, seo_description, seo_keywords } = this.product
    let seo = {}
    if (seo_title) this.$set(seo, 'title', seo_title)
    if (seo_description || seo_keywords) this.$set(seo, 'meta', [])
    if (seo_keywords) seo.meta.push({ hid: `keywords`, name: 'keywords', content: seo_keywords })
    if (seo_description) seo.meta.push({ hid: `description`, name: 'description', content: seo_description })
    if (Object.keys(seo).length > 0) return seo
  },
  watchQuery: true,
  methods: {
    changeImage(val) {
      switch (val) {
        case 'next':
          if (this.translateX > (this.product.images.length - 3) * -91)
            this.translateX -= 91
          break;
        case 'prev':
          if (this.translateX < 0)
            this.translateX += 91
          break;
        default:
          if (val.src && val.src !== this.mainImage)
            this.mainImage = val.src
          break;
      }
    }
  },
  created() {
    this.mainImage = this.product.mainImage || this.product.images[0].src
  }
}
</script>

<style lang="scss" scoped>
.box {
  border-top: 2px solid $c-primary;
  .arrow {
    color: #bbb;
    width: 50px;
    &:hover {
      cursor: pointer;
    }
  }
  .thumbnail-box {
    white-space: nowrap;
    transition: transform 0.3s linear;
    .thumbnail {
      height: 55px;
      width: 55px;
      &:hover {
        cursor: pointer;
      }
      &:not(:last-child) {
        margin-right: 36px;
      }
    }
  }

  .detail-title {
    height: 40px;
    line-height: 40px;
    background-color: $c-primary;
    color: white;
  }
  .btn {
    width: 103px;
    height: 30px;
    line-height: 30px;
    background-color: $c-primary;
    color: white;
    &:hover {
      cursor: pointer;
    }
  }
  .bottom-btn {
    font-size: 14px;
    width: 290px;
    height: 45px;
    line-height: 45px;
    color: $c-primary;
    background-color: $c-bg-gray;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
