<template>
  <section id="about-us">
    <div class="relative box">
      <div class="text-left container-fuild first-block">
        <FTitle class="pt-12">联系我们</FTitle>
        <v-row align="center">
          <v-col :cols="6" class="mt-10">
            <div class="card pa-16">
              <CompanyInfo
                mainTitle="font-weight-bold color-3 line-height-15"
                subTitle="text-subtitle-2 color-3 line-height-15"
                tel-style="font-size:16px; font-weight: bold"
              ></CompanyInfo>
            </div>
            <div class="text-right">
              <button class="mr-2 mt-12 button prim">在线咨询</button>
            </div>
          </v-col>
          <v-col :cols="6" class="pl-16">
            <v-img
              width="300"
              style="position:relative; top: -20px;right:-40px"
              :src="$store.state.qrcode"
            ></v-img>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="container-fuild">
      <FTitle class="pt-12 pb-8">企业实力</FTitle>
      <div class="mx-auto second-block relative">
        <img :src="image" />
        <v-row class="info-block" no-gutters>
          <v-col v-for="{number, unit, sub} in $store.state.datas" :key="sub" :cols="6">
            <div class="color-3 font-weight-bold">
              <span style="font-size: 36px;">{{number}}</span>
              <span>{{unit}}</span>
            </div>
            <div class="color-6">{{sub}}</div>
          </v-col>
        </v-row>
      </div>
      <div class="mb-16" style="width:100%;height:1px"></div>
      <Products title="相关产品" class="mb-10"></Products>
    </div>
  </section>
</template>

<script>
const image = require('../static/about/企业实力配图.png')
export default {
  data() {
    return {
      image
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  max-height: 640px;
  min-width: 1200px;
  background-image: url('../static/about/banner.png');
  background-position: center;
  .first-block {
    height: 640px;
    .card {
      background-color: rgba(255, 255, 255, 0.4);
      width: 490px;
      margin-left: 90px;
    }
  }
  .button {
    font-size: 12px;
    width: 292px;
    height: 37px;
    border-radius: 5px;
    color: white;
    border: 1px solid #f4f4f4;
    &.prim {
      background-color: $c-primary;
    }
    &.blue {
      background-color: #4496df;
    }
  }
  .prefix {
    font-size: 14px;
    z-index: 1;
    color: #333;
    top: 8px;
    left: -60px;
    height: 24px;
  }
}

.second-block {
  width: 830px;
  height: 330px;
  overflow-y: visible;
  margin-bottom: 100px;
  background-color: $c-bg-gray;
  .info-block {
    position: absolute;
    top: 49px;
    left: 287px + 49px;
    bottom: 49px;
    right: 100px;
  }
}
</style>
