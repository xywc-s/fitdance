<template>
  <section id="category" class="col-lg-7 col-md-9 col-sm-11 col-12 mx-auto">
    <title-com :title="title" :subtitle="subtitle" class="py-16"></title-com>
    <v-row class="d-flex text-center">
      <v-col class="left flex-grow-0">
        <template v-for="(item,index) in [category[0],category[1]]">
          <div :key="index" :class="[index ? 'leftbottom': 'lefttop',index? '':'mb-6']">
            <v-img :src="item" lazy-src="/02.jpg">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </div>
        </template>
      </v-col>
      <v-col class="right flex-grow-1">
        <div class="bk">
          <v-img :src="category[2]" lazy-src="/02.jpg">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex mt-15 justify-space-around">
      <v-col v-for="(item,index) in categories" :key="index">
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
  },
  computed: {
    category() {
      return this.$store.state.category
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
    flex-basis: '63.3%';
    .bk {
      background-color: pink;
      height: 100%;
      border-top-right-radius: 4rem;
      border-bottom-right-radius: 4rem;
      position: relative;
      overflow: hidden;
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
