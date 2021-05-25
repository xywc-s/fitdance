<template>
  <section id="cases" class="text-center">
    <img class="max-w-100" :src="banner" />
    <div class="container-fuild text-left">
      <f-title class="mt-16">定制流程</f-title>
      <Process></Process>
      <f-title class="mt-16">合作案例</f-title>
      <img class="mt-8" :src="cooperation_case" />
      <div class="text-right">
        <span class="sub-title-2 text--disabled">部分合作伙伴案例展示</span>
      </div>
      <f-title class="mt-16">品牌伙伴</f-title>
      <img class="mt-8" :src="partners" />
      <div class="d-flex justify-space-around align-center mt-10">
        <img :src="brand" />
        <div>
          <CompanyInfo mainTitle="font-weight-bold" subTitle="text-subtitle-2"></CompanyInfo>
        </div>
      </div>
      <Products class="my-16" title="相关产品"></Products>
    </div>
  </section>
</template>

<script>
const banner = require('../static/cases/banner.png')
const partners = require('../static/cases/品牌伙伴.png')
const brand = require('../static/cases/品牌形象.png')
const cooperation_case = require('../static/cases/合作案例.png')

export default {
  data() {
    return {
      banner,
      partners,
      brand,
      cooperation_case
    }
  }
}
</script>

<style>
</style>
