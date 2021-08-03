<template>
  <div class="pa-20">
    <span class="tip">产品SEO全局设置</span>
    <el-divider direction="vertical"></el-divider>

    <el-button v-if="!edit" icon="el-icon-edit" size="mini" circle @click="editHandler"></el-button>
    <template v-else>
      <el-button icon="el-icon-check" size="mini" type="success" circle @click="setSeo"></el-button>
      <el-button icon="el-icon-close" size="mini" type="danger" circle @click="edit = false"></el-button>
    </template>
    <el-divider></el-divider>
    <div v-for="(value, key) in seo_items" :key="key" class="mb-10">
      <el-tag type="primary" style="width:80px;text-align:center">{{value}}</el-tag>
      <el-divider direction="vertical"></el-divider>
      <span v-if="!edit">{{seo[key] || '暂无默认值'}}</span>
      <el-input
        v-else
        v-model="new_seo[key]"
        :maxlength="input_limit[key]"
        show-word-limit
        style="width:500px"
      ></el-input>
    </div>
  </div>
</template>

<script lang='ts'>
import { updateSetting } from '@/api/common'
import { ProductModule } from '@/store/modules/product'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'seo'
})
export default class extends Vue {
  public seo_items = {
    seo_title: 'SEO标题',
    seo_description: 'SEO描述',
    seo_keywords: 'SEO关键词'
  }
  public input_limit = {
    seo_title: 20,
    seo_description: 120,
    seo_keywords: 48
  }
  public edit = false
  public new_seo = {
    seo_title: '',
    seo_description: '',
    seo_keywords: ''
  }

  get seo() {
    return {
      seo_title: ProductModule.seo_title,
      seo_description: ProductModule.seo_description,
      seo_keywords: ProductModule.seo_keywords
    }
  }

  editHandler() {
    this.edit = true
    this.new_seo = Object.assign({}, this.seo)
  }

  async setSeo() {
    await updateSetting(this.new_seo)
    ProductModule.SET_SEO(this.new_seo)
    this.edit = false
  }

}
</script>
<style lang='scss'></style>
