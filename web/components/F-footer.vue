<template>
  <v-row id="footer" class="py-5">
    <v-col class="col-lg-7 col-md-9 col-sm-11 col-12 mx-auto">
      <v-row class="d-flex justify-center align-center">
        <v-row class="d-flex ml-auto flex-grow-0">
          <v-icon style="font-size:3.5rem;color:white">mdi-phone-outline</v-icon>
          <div class="ml-2 white--text">
            <h3 class="line-height-1">芭蕾裙 舞蹈服定制热线</h3>
            <h1 class="line-height-1">{{tel}}</h1>
          </div>
        </v-row>
        <v-img class="flex-grow-0 ml-16 qrcode" contain :src="qrcode"></v-img>
      </v-row>
      <v-list-item v-for="({title, path},index) in menus" :key="title" class="float-left">
        <nuxt-link :to="path">
          <span class="white--text">{{title}}</span>
        </nuxt-link>
        <span class="pl-8 white--text">{{index === menus.length-1? '': '/'}}</span>
      </v-list-item>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['menus', 'tel', 'qrcode'])
  }
}
</script>

<style lang="scss" scoped>
#footer {
  background-color: dimgray;
}
</style>
