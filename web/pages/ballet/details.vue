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
            <v-list dense class="py-0 font-14 color-primary">
              <CategoryList :categories="categories" :parents="[]"></CategoryList>
            </v-list>
          </div>
        </div>
        <div class="new-publish mt-16">
          <div class="header">
            <div class="ml-5">新品发布</div>
          </div>
          <div class="body px-2">
            <v-row
              no-gutters
              align="center"
              class="d-flex flex-nowrap item py-3 pointer"
              v-for="(product,i) in new_products"
              :key="product.title"
              @click="$router.push({path: `/ballet/details/prodct/${product.id}`})"
            >
              <v-img
                aspect-ratio="1"
                :width="83"
                :max-width="83"
                :src="product.mainImage||product.images[0].src"
              />
              <div class="ml-3 color-3 font-12" style="overflow-wrap: anywhere">{{product.title}}</div>
            </v-row>
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
import { mapState } from 'vuex'
export default {
  async asyncData({ $api }) {
    const { data } = await $api.getProducts({ currentPage: 1, pageSize: 7, filters: { is_new: true } })
    const new_products = data
    return { new_products }
  },
  computed: {
    ...mapState(['categories']),
  },
  data() {
    return {
      currentTab: 0
    }
  }
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
