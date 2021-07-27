<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getStatics } from '@/api/common';
import { AxiosResponse } from 'axios';
import { setDirOptions } from '@/utils/cookies';
import { ProductModule } from '@/store/modules/product';
import { AppModule } from '@/store/modules/app';

@Component({
  name: 'App'
})
export default class extends Vue {
  async getStaticData() {
    const { data } = await getStatics() as AxiosResponse['data']
    setDirOptions(data.dirOptions)
    ProductModule.SET_SEO(data.seo)
    AppModule.SET_IMAGE_DOMAIN(data.image_domain)
  }

  mounted() {
    this.getStaticData()
  }
}
</script>
