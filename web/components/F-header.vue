<template>
  <v-row>
    <v-col class="col-lg-7 col-md-9 col-sm-11 col-12 mx-auto">
      <v-row class="d-flex justify-center align-center my-6">
        <v-img class="flex-grow-0" src="/logo.png" height="auto"></v-img>
        <v-row class="d-flex ml-auto flex-grow-0">
          <v-icon x-large>mdi-phone-outline</v-icon>
          <div>
            <h5>芭蕾裙 舞蹈服定制热线</h5>
            <h2>13708208599</h2>
          </div>
        </v-row>
        <v-img class="flex-grow-0 ml-4" src="/logo.png" height="auto"></v-img>
      </v-row>
      <v-list-item v-for="({title, path},index) in menus" :key="title" class="float-left">
        <nuxt-link :to="path">
          <span>{{title}}</span>
        </nuxt-link>
        <span class="pl-8">{{index === menus.length-1? '': '/'}}</span>
      </v-list-item>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      menus: [{
        title: '首页',
        path: '/'
      }, {
        title: '斐丹丝',
        path: '/'
      }, {
        title: '芭蕾裙',
        path: '/'
      }, {
        title: '练功服',
        path: '/'
      }, {
        title: '客户案例(包含下单流程)',
        path: '/'
      }, {
        title: '新闻',
        path: '/'
      }, {
        title: '联系我们',
        path: '/'
      }]
    }
  }
}
</script>
