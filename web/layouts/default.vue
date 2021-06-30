<template>
  <v-app>
    <header>
      <top></top>
      <navbar></navbar>
    </header>
    <main>
      <nuxt />
    </main>
    <footer class="pt-8 pb-4 color-bg-gray">
      <section class="container-fuild d-flex justify-space-around">
        <div>
          <div class="text-h6 color-primary">联系我们</div>
          <div class="text-caption text--disabled">Contact Us</div>
          <v-img contain width="80" :src="qrcode"></v-img>
        </div>
        <div>
          <div class="text-caption text--disabled">关注</div>
          <div class="mt-6">
            <v-icon
              class="mx-2"
              v-for="icon in ['mdi-sina-weibo','mdi-wechat','mdi-qqchat']"
              :key="icon"
            >{{icon}}</v-icon>
          </div>
        </div>
        <company-info showSubContact></company-info>
      </section>
      <Copyright></Copyright>
    </footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
export default {
  async fetch() {
    await this.$store.dispatch('getImages')
  },
  computed: {
    ...mapState(['tel', 'qrcode'])
  },
  mounted() {
    const headTag = document.querySelector('head')
    const baiduSiteVerifyTag = document.createElement('meta')
    baiduSiteVerifyTag.setAttribute('name', 'baidu-site-verification')
    baiduSiteVerifyTag.setAttribute('content', 'code-78u2vOur6f')
    headTag.prepend(baiduSiteVerifyTag)
  }
}
</script>
<style lang="scss" scoped>
header,
footer {
  width: 100%;
  min-width: 1200px;
  max-width: 1920px;
  margin: 0 auto;
}
</style>
