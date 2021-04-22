<template>
  <v-row>
    <v-col class="col-lg-7 col-md-9 col-sm-11 col-12 mx-auto">
      <v-row class="d-flex justify-center align-center my-6">
        <v-img class="flex-grow-0 logo" contain :src="logo"></v-img>
        <v-row class="d-flex ml-auto flex-grow-0">
          <v-icon style="font-size:3.5rem">mdi-phone-outline</v-icon>
          <div class="ml-2">
            <h3 class="line-height-1">芭蕾裙 舞蹈服定制热线</h3>
            <h1 class="line-height-1">{{tel}}</h1>
          </div>
        </v-row>
        <v-img class="flex-grow-0 ml-16 qrcode" contain :src="qrcode"></v-img>
      </v-row>
      <v-list-item v-for="({title, path},index) in menus" :key="title" class="float-left">
        <nuxt-link :to="path">
          <span class="menu">{{title}}</span>
        </nuxt-link>
        <span class="pl-8">{{index === menus.length-1? '': '/'}}</span>
      </v-list-item>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['menus', 'tel', 'logo', 'qrcode'])
  }
}
</script>
<style lang="scss" scoped>
.menu {
  font-size: 1.2rem;
}
</style>
