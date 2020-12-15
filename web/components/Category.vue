<template>
  <section id="category" class="col-lg-7 col-md-9 col-sm-11 col-12 mx-auto">
    <title-com :title="title" :subtitle="subtitle"></title-com>
    <v-row class="d-flex my-15 text-center">
      <v-col class="left flex-grow-0">
        <template v-for="(item,index) in [categories[0],categories[1]]">
          <div :key="index" :class="[index ? 'leftbottom': 'lefttop',index? '':'mb-6']">
            <div class="text-h4 d-flex flex-column justify-center">
              <div class="mb-4">{{item.name}}</div>
              <div class="icon font-weight-light align-self-center">></div>
            </div>
          </div>
        </template>
      </v-col>
      <v-col class="right flex-grow-1">
        <div class="bk text-h4 d-flex justify-center">
          <div class="d-flex align-self-end mb-6">
            <div class="flex-grow-0">芭蕾裙专区</div>
            <div class="icon font-weight-light flex-grow-0 align-self-center">></div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-space-around">
      <v-col
        v-for="(item,index) in [categories[3],categories[4],categories[5],categories[6]]"
        :key="index"
      >
        <nuxt-link class="d-flex align-center" :to="item.path">
          <span class="text-h5">{{item.name}}</span>
          <span class="text-h5 mx-1">></span>
          <img style="max-width: 120px" :src="item.img" />
        </nuxt-link>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: `产 / 品 / 分 / 类`,
      subtitle: 'class products',
      categories: [{
        name: '基础练功服',
        path: '/category/practice-clothes',
        level: 1,
        img: ''
      }, {
        name: '蓬蓬裙舞蹈服',
        path: '/category/dancing-dress',
        level: 2,
        img: ''
      }, {
        name: '芭蕾裙专区',
        path: '/category/ballet-skirt',
        level: 3,
        img: ''
      }, {
        name: '披肩外套',
        path: '/category/coat',
        level: 4,
        img: '/category_1.png'
      }, {
        name: '舞蹈鞋',
        path: '/category/shoes',
        level: 5,
        img: '/category_2.png'
      }, {
        name: '舞蹈袜',
        path: '/category/socks',
        level: 6,
        img: '/category_3.png'
      }, {
        name: '舞蹈配饰',
        path: '/category/accessories',
        level: 7,
        img: '/category_4.png'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
#category {
  .left {
    flex-basis: 36.7%;
    .lefttop {
      background-color: #ffb74d;
    }
    .leftbottom {
      background-color: $c-green;
    }
    .lefttop,
    .leftbottom {
      position: relative;
      &::before {
        display: block;
        content: ' ';
        width: 100%;
        padding: 25% 0%;
      }
      > div:first-child {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
      }
    }
  }

  .right {
    .bk {
      background-color: pink;
      height: 100%;
      border-top-right-radius: 4rem;
      border-bottom-right-radius: 4rem;
    }
  }

  .icon {
    background-color: mediumvioletred;
    width: 3.5vw;
    font-size: calc(100vw / 50);
    color: white;
    border-radius: 25rem;
    line-height: 2rem;
  }
}
</style>
