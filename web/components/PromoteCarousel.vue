<template>
  <section>
    <div class="d-flex align-center box">
      <div class="pointer arrows mt-5" @click="leftMove">
        <img class="d-block" :src="arrows[0]" />
      </div>
      <div class="flex-grow-1 wrapper mx-6 pt-16 pb-4">
        <div class="contain">
          <template v-for="(position,i) in items">
            <PromoteCarouselItem
              :key="i"
              :idx="i"
              :length="length"
              :position="position"
              :value="products[i]"
            ></PromoteCarouselItem>
          </template>
          <!-- <img v-for="(image,i) in products" :key="i" :class="['d-block','image']" :src="image" /> -->
        </div>
      </div>
      <div class="pointer arrows mt-5" @click="rightMove">
        <img class="d-block" :src="arrows[1]" />
      </div>
    </div>
    <div class="divider"></div>
  </section>
</template>

<script>
const arrows = [
  require('../static/products/ballet/shoes/左箭头.png'),
  require('../static/products/ballet/shoes/右箭头.png')
]
const products = [
  require('../static/products/ballet/shoes/产品推广轮播首图.png'),
  require('../static/products/ballet/shoes/产品推广01.png'),
  require('../static/products/ballet/shoes/产品推广02.png'),
  require('../static/products/ballet/shoes/产品推广03.png'),
  require('../static/products/ballet/shoes/产品推广04.png'),
  require('../static/products/ballet/shoes/产品推广05.png'),
  require('../static/products/ballet/shoes/产品推广06.png')
]
export default {
  data() {
    return {
      direction: '',
      current_id: 1,
      length: 0,
      bigLength: 0,
      isTicking: false,
      items: [],
      products,
      arrows
    }
  },
  methods: {
    leftMove() {
      if (!this.isTicking) {
        this.isTicking = true
        const newItems = this.items.map((item, i) => {
          return (item + 1) % this.bigLength
        })
        this.items = newItems
      }
    },
    rightMove() {
      if (!this.isTicking) {
        this.isTicking = true
        const newItems = this.items.map((item, i) => {
          return (this.bigLength + item - 1) % this.bigLength
        })
        this.items = newItems
      }
    }
  },
  watch: {
    isTicking(val) {
      if (val)
        setTimeout(() => {
          this.isTicking = false
        }, 300);
    },
    items() {
      this.activeIdx = (this.length - (this.items[0] % this.length)) % this.length
    }
  },
  mounted() {
    const _products = []
    _products.push(...this.products)
    this.length = this.products.length
    _products.push(...this.products)
    this.products = [..._products]

    this.items = Array.from(Array(this.products.length).keys())
    this.bigLength = this.items.length
  }
}
</script>

<style lang="scss" scoped>
$item-size: 196px;
.box {
  position: relative;
  width: 1200px;
  z-index: 0;
  .arrows {
    z-index: 99;
  }
  .wrapper {
    height: $item-size;
    box-sizing: content-box;
    width: 1000px;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    z-index: 0;
    .contain {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: $item-size * 7 * 2;
      height: 100%;
      z-index: 1;
    }
  }
}
.divider {
  border-top: 5px solid $c-bg-gray;
}
</style>
