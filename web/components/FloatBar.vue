<template>
  <section class="text-left">
    <div class="left-bar">
      <img :src="icon_mini" class="mini" />
      <div class="pa-5 font-22">其他专区</div>
      <div
        :class="['pl-5 pb-4 font-16', {'active': $route.path === path}]"
        v-for="({nav, path}, i) in navs"
        :key="i"
      >
        <div class="d-flex align-center pointer" @click="$router.push(path)">
          <v-icon class="mr-2" :color="$route.path === path?'yellow':'white'">mdi-star</v-icon>
          {{nav}}
        </div>
      </div>
    </div>
    <div class="right-bar pl-5 py-4">
      <img :src="icon_mini" class="mini" />
      <div class="pb-4 font-22">在线客服</div>
      <div
        :class="['pb-2 font-16']"
        v-for="(item, i) in ['产品订单','定制设计','来图制作','订单跟踪','售后服务']"
        :key="i"
      >
        <div class="d-flex align-center pointer customer">
          <img :src="icon_customer" class="d-block mx-2" />
          <div>{{item}}咨询</div>
        </div>
      </div>
      <div class="d-flex align-center pt-4">
        <img :src="icon_tel" class="d-block mr-2" />
        <div>定制服务热线</div>
      </div>
      <div class="font-18">{{$store.state.tel}}</div>
      <img :src="qrcode" />
    </div>
  </section>
</template>

<script>
const icon_mini = require('../static/float_bar/悬浮框缩小键.png')
const icon_border = require('../static/float_bar/右边框.png')
const icon_tel = require('../static/float_bar/右侧-电话.png')
const icon_customer = require('../static/float_bar/右侧-联系客服.png')
const qrcode = require('../static/float_bar/右侧二维码.png')
export default {
  data() {
    return {
      icon_mini,
      icon_border,
      icon_tel,
      icon_customer,
      qrcode,
      navs: [{
        nav: '芭蕾专区',
        path: '/ballet'
      }, {
        nav: '练功服专区',
        path: '/dancing'
      }, {
        nav: '舞蹈裙专区',
        path: '/ballet/dress'
      }, {
        nav: '舞蹈鞋专区',
        path: '/ballet/shoes'
      }, {
        nav: '其他产品',
        path: '/other'
      }]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.left-bar,
.right-bar {
  z-index: 999;
  background-color: $c-primary;
  color: white;
  position: fixed;
  top: 300px;
  .mini {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 1px;
    right: 2px;
    &:hover {
      cursor: pointer;
    }
  }
}
.left-bar {
  left: 0;
  width: 187px;
  border-bottom-right-radius: 5px;
  .active {
    color: yellow;
  }
}
.right-bar {
  right: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  .customer {
    width: 235px;
    height: 34px;
    background-image: url('../static/float_bar/右边框.png');
  }
}
</style>
