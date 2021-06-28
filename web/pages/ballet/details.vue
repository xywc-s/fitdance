<template>
  <section id="details">
    <FloatBar></FloatBar>
    <div class="d-flex container-fuild text-left mt-12 mb-10">
      <div>
        <div class="category">
          <div class="header">
            <div class="ml-5">芭蕾分区</div>
          </div>
          <div class="body">
            <div
              class="menu px-3 font-14 color-3"
              v-for="(item, i) in ['经典芭蕾', '热销芭蕾','专业芭蕾','半截芭蕾裙','吉普赛长裙']"
              :key="i"
            >{{item}}</div>
          </div>
        </div>
        <div class="new-publish mt-16">
          <div class="header">
            <div class="ml-5">新品发布</div>
          </div>
          <div class="body px-2">
            <div
              class="item d-flex align-center py-3"
              v-for="(product,i) in new_publish_products"
              :key="i"
            >
              <img :src="product" class="d-block" />
              <div class="ml-3 color-3 font-12">蓝色芭蕾裙</div>
            </div>
            <div class="btn my-3 font-14" @click="()=> $router.push('/about')">我要询盘</div>
          </div>
        </div>
      </div>
      <div class="flex-grow-1">
        <nuxt-child></nuxt-child>
      </div>
    </div>
    <div class="container-fuild mb-10" v-if="!$route.params.id">
      <div class="d-flex" style="background-color: #e0e0e0;">
        <div
          :class="['tab', {'active': currentTab === i}]"
          v-for="(item,i) in ['芭蕾裙展示','练功服展示','蓬蓬裙展示']"
          :key="i"
          @click="()=>{ currentTab = i }"
        >{{item}}</div>
      </div>
      <div>
        <img src="~static/products/ballet/details/芭蕾裙展示区.png" class="d-block" />
        <div class="mt-2 text-center">
          <img src="~static/products/ballet/details/图层7.png" />
        </div>
      </div>
      <div class="bottom-btn mt-5 ml-auto" @click="()=> $router.push('/about')">我要询盘</div>
    </div>
  </section>
</template>

<script>
const new_publish_products = [
  require('../../static/products/ballet/details/新品01.png'),
  require('../../static/products/ballet/details/新品02.png'),
  require('../../static/products/ballet/details/新品03.png'),
  require('../../static/products/ballet/details/新品04.png'),
  require('../../static/products/ballet/details/新品05.png'),
  require('../../static/products/ballet/details/新品06.png'),
  require('../../static/products/ballet/details/新品07.png')
]
export default {
  asyncData({ params }) {
    console.log(params);
  },
  data() {
    return {
      new_publish_products,
      currentTab: 0
    }
  },
  watchQuery: ['page']
}
</script>

<style lang="scss" scoped>
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
.category,
.new-publish {
  width: 300px;
  .header {
    font-size: 22px;
    height: 66px;
    line-height: 66px;
    color: white;
    background-color: $c-primary;
  }
  .body {
    border: 1px solid $c-border;
    .menu {
      height: 44px;
      line-height: 44px;
      // border-bottom: 1px solid $c-border;
      &:not(:last-child) {
        border-bottom: 1px solid $c-border;
      }
    }
    .item {
      border-bottom: 1px solid $c-border;
    }
    .btn {
      height: 45px;
      line-height: 45px;
      text-align: center;
      background-color: $c-bg-gray;
      color: $c-primary;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
.tab {
  width: 190px;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  &.active {
    border-top: 2px solid $c-primary;
    background-color: white;
  }
}
</style>
