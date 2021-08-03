<template>
  <section class="box ml-10">
    <div class="font-26 color-3 font-weight-bold mt-8" style="letter-spacing:2px">{{title}}</div>
    <div class="color-3 mb-3">高端定制，纯手工打造</div>
    <div class="list d-flex pa-5" v-for="(product, i) in products" :key="i">
      <v-img
        aspect-ratio="1"
        :min-width="300"
        :max-width="300"
        :width="300"
        :src="product.mainImage||product.images[0].src"
      />
      <div class="ml-4 color-3">
        <div class="font-weight-bold mt-4">{{product.title}}</div>
        <div class="font-12 mt-5" style="line-height:20px">
          <div v-for="(attr, index) in product.attrs" :key="i+'_'+index">{{attr}}</div>
        </div>
        <div class="d-flex text-center font-14 mt-12">
          <div class="btn mr-3" @click="viewDetail(product)">查看更多</div>
          <div class="btn" @click="()=> $router.push('/about')">联系我们</div>
        </div>
      </div>
    </div>
    <v-pagination
      class="mt-2"
      v-model="currentPage"
      :length="sizes"
      :total-visible="7"
      @input="pageChange"
    ></v-pagination>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async asyncData({ params, query, store }) {
    if (!store.state.currentCategory) {
      store.dispatch('getCategory', params.category)
    }
    store.dispatch('getProducts', { categoryId: params.category, ...query })
  },
  data() {
    return {
      currentPage: parseInt(this.$route.query.currentPage) || 1
    }
  },
  computed: {
    ...mapState(['total', 'products', 'currentCategory']),
    sizes() {
      return Math.ceil(this.total / 4) || 1
    },
    title() {
      if (this.currentCategory) return this.currentCategory.name
      return ''
    }
  },
  methods: {
    viewDetail(product) {
      this.$router.push({ path: `/ballet/details/product/${product.id}` });
    },
    pageChange() {
      this.$router.push({ query: { ...this.$route.query, currentPage: this.currentPage } })
    },
  },
  watchQuery: true
}
</script>

<style lang="scss" scoped>
.box {
  border-top: 2px solid $c-primary;
  .list {
    border-bottom: 1px solid $c-border;
    .btn {
      width: 122px;
      height: 45px;
      line-height: 45px;
      background-color: $c-primary;
      color: white;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
