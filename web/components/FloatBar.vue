<template>
  <section class="text-left">
    <div
      class="left-bar"
      :style="isLeftMinimizi?{width: '20px',height: '20px' }:{ width: '187px', height:'auto'}"
    >
      <img :src="icon_mini" class="mini" @click.stop="minimize('left')" />
      <div class="pa-5 font-22">其他专区</div>
      <div
        :class="['pl-5 pb-4 font-16', {'active': nav === '芭蕾专区'? $route.path === path || $route.path.includes('/ballet/details') : $route.path === path}]"
        v-for="({nav, path}, i) in navs"
        :key="i"
      >
        <div class="d-flex align-center pointer" @click="$router.push(path)">
          <v-icon
            class="mr-2"
            :color="nav === '芭蕾专区'? ($route.path === path || $route.path.includes('/ballet/details') ?'yellow':'white'): ($route.path === path?'yellow':'white')"
          >mdi-star</v-icon>
          {{nav}}
        </div>
      </div>
    </div>
    <div
      class="right-bar"
      :style="isRightMinimizi?{width: '22px',height: '20px' }:{ width: 'auto', height:'auto'}"
    >
      <img :src="icon_mini" class="mini" @click.stop="minimize('right')" />
      <div class="pl-5 py-4 font-22">在线客服</div>
      <div
        :class="['pl-5 pb-2 font-16']"
        v-for="(item, i) in ['产品订单','定制设计','来图制作','订单跟踪','售后服务']"
        :key="i"
      >
        <div class="d-flex align-center pointer customer" @click="()=> $router.push('/about')">
          <img :src="icon_customer" class="d-block mx-2" />
          <div>{{item}}咨询</div>
        </div>
      </div>
      <div class="d-flex align-center pl-5 pt-4">
        <img :src="icon_tel" class="d-block mr-2" />
        <div>定制服务热线</div>
      </div>
      <div class="pl-5 font-18">{{$store.state.tel}}</div>
      <img :src="qrcode" class="d-block pl-5 pb-4" />
    </div>
  </section>
</template>

<script>
const icon_mini = require('../static/float_bar/悬浮框缩小键.png')
const icon_border = require('../static/float_bar/右边框.png')
const icon_tel = require('../static/float_bar/右侧-电话.png')
const icon_customer = require('../static/float_bar/右侧-联系客服.png')
const qrcode = require('../static/float_bar/右侧二维码.png')

import { mapState } from 'vuex'

export default {
  data() {
    return {
      leftBar: null,
      rightBar: null,
      icon_mini,
      icon_border,
      icon_tel,
      icon_customer,
      qrcode,
      navs: [{
        nav: '芭蕾专区',
        path: '/ballet',
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
    minimize(direction) {
      if (direction === 'left') {
        if (!this.isLeftMinimizi) {
          this.leftBar.style.width = '20px'
          this.leftBar.style.height = '20px'
        } else {
          this.leftBar.style.width = '187px'
          this.leftBar.style.height = 'auto'
        }
      } else if (direction === 'right') {
        if (!this.isRightMinimizi) {
          this.rightBar.style.width = '22px'
          this.rightBar.style.height = '20px'
        } else {
          this.rightBar.style.width = 'auto'
          this.rightBar.style.height = 'auto'
        }
      }
      this.$store.commit('set_floatbar_status', { direction })
    }
  },
  computed: {
    ...mapState(['isLeftMinimizi', 'isRightMinimizi'])
  },
  mounted() {
    this.leftBar = document.querySelector('.left-bar');
    this.rightBar = document.querySelector('.right-bar');
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
  overflow: hidden;
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
