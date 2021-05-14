<template>
  <div>
    <v-tabs right hide-slider active-class="tabs" v-model="model" @change="tabChange">
      <v-tab class="tab" v-for="(tab,i) in tabs" :key="i" :href="`#tab-${i}`">{{tab}}</v-tab>
    </v-tabs>
    <v-tabs-items v-model="model" class="mt-6" style="height:290px">
      <v-tab-item v-for="(tab, i) in tabs" :key="i" :value="`tab-${i}`">
        <div class="card-carousel-wrapper">
          <div class="card-carousel--nav__left" :disabled="atHeadOfList" @click="moveCarousel(-1)"></div>
          <div class="card-carousel">
            <div class="card-carousel--overflow-container">
              <div
                class="card-carousel-cards"
                :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}"
              >
                <div class="card-carousel--card" v-for="(image, index) in items" :key="index">
                  <img :src="image" />
                  <div class="card-carousel--card--footer">
                    <p>B8090背心雪纺裙</p>
                    <p class="text-caption">背心雪纺裙</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-carousel--nav__right" :disabled="atEndOfList" @click="moveCarousel(1)"></div>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
const product_1 = require('../static/产品01.png')
const product_2 = require('../static/产品02.png')
const product_3 = require('../static/产品03.png')
export default {
  data() {
    return {
      model: 'tab-0',
      tabs: ['全部', '基础练功服', '蓬蓬裙舞蹈裙', '舞蹈鞋舞蹈袜', '定制服务'],
      items: [product_1, product_2, product_3, product_3, product_2],
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 320,
    }
  },
  computed: {
    atEndOfList() {
      return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize);
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
    tabChange() {
      this.currentOffset = 0;
    }
  }
}
</script>
<style lang="scss" scoped>
.tabs {
  color: #fff !important;
  background-color: $c-primary;
}
.tab {
  position: relative;
  margin-right: 40px;
  &:last-child {
    margin-right: 130px !important;
  }
  &:not(:last-child)::after {
    position: absolute;
    content: '';
    right: -30px;
    display: block;
    height: 1px;
    width: 20px;
    background-color: black;
  }
}

$vue-navy: #2c3e50;
$vue-navy-light: #3a5169;
$vue-teal: #42b883;
$vue-teal-light: #42b983;
$gray: #666a73;
$light-gray: #f8f8f8;

.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $gray;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 940px;

  &--overflow-container {
    overflow: hidden;
  }

  &--nav__left,
  &--nav__right {
    position: relative;
    top: -30px;
    display: inline-block;
    width: 14px;
    height: 14px;
    margin: 0 20px;
    box-sizing: border-box;
    border-top: 2px solid $c-primary;
    border-right: 2px solid $c-primary;
    cursor: pointer;
    transition: transform 150ms linear;
    &[disabled] {
      opacity: 0.2;
      border-color: black;
    }
  }

  &--nav__left {
    transform: rotate(-135deg);
    &:active {
      transform: rotate(-135deg) scale(0.9);
    }
  }

  &--nav__right {
    transform: rotate(45deg);
    &:active {
      transform: rotate(45deg) scale(0.9);
    }
  }
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);

  .card-carousel--card {
    margin: 0 10px;
    cursor: pointer;
    background-color: #fff;
    border-radius: 1px;
    z-index: 3;
    margin-bottom: 2px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    img {
      vertical-align: bottom;
      user-select: none;
    }

    &--footer {
      border-top: 0;
      padding: 7px 15px;
      margin-top: 5px;

      p {
        padding: 3px 0;
        margin: 0;
        margin-bottom: 2px;
        font-weight: 500;
        user-select: none;
      }
    }

    &:hover {
      .card-carousel--card--footer {
        background-color: $c-primary;
        color: white;
      }
    }
  }
}
</style>

