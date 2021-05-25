<template>
  <section>
    <img class="max-w-100" :src="banner" />
    <div class="color-bg-gray">
      <div class="container-fuild py-12">
        <v-row class="mx-auto" style="width:80%">
          <v-col v-for="{number, unit, sub} in $store.state.datas" :key="sub" class="text-center">
            <div>
              <span class="color-3" style="font-size:40px">{{number}}</span>
              <span class="color-9" style="font-size:19px">{{unit}}</span>
            </div>
            <div class="color-9">{{sub}}</div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="container-fuild">
      <Products title="相关产品" class="mb-10"></Products>
    </div>
  </section>
</template>

<script>
const banner = require('../../static/products/dancing/banner.png')

export default {
  data() {
    return {
      banner
    }
  }
}
</script>

<style>
</style>
