<template>
  <div style="padding:20px">
    <el-row>
      <div style="position:relative">
        <div class="buttons">
          <el-tooltip content="返回" placement="right">
            <el-button circle icon="el-icon-back" size="small" @click="$router.go(-1)"></el-button>
          </el-tooltip>
          <!-- <el-tooltip effect="dark" content="清空" placement="left">
            <el-button circle icon="el-icon-close" type="danger" size="small" @click="clear"></el-button>
          </el-tooltip>-->
          <el-tooltip content="保存" placement="right">
            <el-button circle icon="el-icon-check" type="success" size="small" @click="save"></el-button>
          </el-tooltip>
        </div>
      </div>
      <el-col :span="16" style="margin-left: 80px">
        <el-form
          ref="form"
          :model="new_product"
          size="small"
          label-position="left"
          label-width="90px"
        >
          <div style="width: 60%; min-width: 500px">
            <el-form-item label="产品分类" prop="category" required :error="categoryValid">
              <el-cascader
                v-model="new_product.category"
                :options="categoryNodes"
                :props="{ checkStrictly: true, expandTrigger: 'hover', emitPath: false,  value: 'id', label: 'name'}"
                clearable
              ></el-cascader>
            </el-form-item>
            <el-form-item
              label="产品标题"
              prop="title"
              :rules="{required: true, message: '请输入产品标题',trigger: 'blur'}"
            >
              <el-input v-model="new_product.title" maxlength="120" show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="新品" prop="is_new">
              <el-switch v-model="new_product.is_new"></el-switch>
            </el-form-item>
            <el-row type="flex" justify="space-between">
              <el-col>
                <el-tag>产品属性</el-tag>
                <span class="ml-15" style="font-size:12px; color:#909399">
                  <i class="el-icon-warning"></i>
                  例如 颜色：红、橙、黄、绿、蓝等等,每条特性一行.
                </span>
              </el-col>
              <el-button
                icon="el-icon-plus"
                type="text"
                size="small"
                @click="()=> new_product.attrs.push({value: ''})"
              >添加</el-button>
            </el-row>
            <el-divider class="my-5"></el-divider>
            <el-form-item
              v-for="(item, i) in new_product.attrs"
              :key="i"
              :label="`属性${i+1}`"
              :prop="'attrs.'+i+'.value'"
              :rules="{required: true, message: '属性不能为空', trigger: 'blur'}"
              style="position: relative"
            >
              <el-input v-model="item.value"></el-input>
              <el-button
                v-if="i"
                style="position: absolute; right: -40px;"
                type="danger"
                plain
                circle
                size="small"
                icon="el-icon-delete"
                @click="()=> new_product.attrs.splice(i,1)"
              ></el-button>
            </el-form-item>

            <el-tag>产品图片</el-tag>
            <el-divider class="my-5"></el-divider>
            <el-upload
              ref="upload"
              multiple
              :file-list="images"
              list-type="picture-card"
              action="//up-z2.qiniup.com"
              :auto-upload="false"
              :data="uploadData"
              :before-upload="file => uploadData.key = `product/${Date.now()}/${file.name}`"
              :on-success="uploadSuccess"
            >
              <i class="el-icon-upload"></i>
            </el-upload>
            <el-row type="flex" justify="space-between" class="mt-10">
              <el-tag>SEO设置</el-tag>
              <el-button type="text" @click="seoSet">一键SEO</el-button>
            </el-row>
            <el-divider class="my-5"></el-divider>
            <el-form-item label="SEO标题">
              <el-input v-model="new_product.seo_title" maxlength="20" show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="SEO描述">
              <el-input v-model="new_product.seo_description" maxlength="120" show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="SEO关键词">
              <el-input v-model="new_product.seo_keywords" maxlength="48" show-word-limit></el-input>
            </el-form-item>
          </div>
          <el-tag>产品详情</el-tag>
          <el-divider class="my-5"></el-divider>
          <tinymce v-if="tinymceActive" v-model="new_product.details" :height="800" />
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Ref, Vue } from 'vue-property-decorator'
import Tinymce from '@/components/Tinymce/index.vue'
import { createProduct, getCategories, updateProduct } from '@/api/products'
import { ProductModule } from '@/store/modules/product'
import { getUploadToken } from '@/api/files'
import { AxiosResponse } from 'axios'

@Component({
  name: 'product-edit',
  components: {
    Tinymce
  }
})
export default class extends Vue {
  @Ref() readonly form!: HTMLFormElement
  @Ref() readonly upload!: HTMLFormElement

  uploadData = {
    token: '',
    key: ''
  }

  images = []

  new_product = {
    category: NaN,
    title: '',
    is_new: false,
    seo_title: '',
    seo_description: '',
    seo_keywords: '',
    images: [],
    attrs: [{
      value: ''
    }],
    details: ''
  }

  categoryNodes = []
  tinymceActive: Boolean = true
  categoryValid = ''

  get uploaded(): Boolean {
    if(this.upload.uploadFiles.length > 0) {
      return this.upload.uploadFiles.every((file: any) => file.status === 'success')
    }
    return false
  }

  deactivated() {
    this.tinymceActive = false
  }

  activated() {
    this.tinymceActive = true
  }

  seoSet() {
    this.new_product.seo_title = ProductModule.seo_title
    this.new_product.seo_description = ProductModule.seo_description
    this.new_product.seo_keywords = ProductModule.seo_keywords
  }

  async save() {
    if(!this.new_product.category) return this.categoryValid = '必须选择一个产品分类'
    this.form.validate(async (valid: boolean) => {
      if(!valid) return
      if(this.upload.uploadFiles.length === 0)
        return this.$message.error('请至少上传一张产品图片!')
      const needUpload = this.upload.uploadFiles.some((file: any) => Object.prototype.hasOwnProperty.apply(file, ['raw']))
      if(needUpload) {
        await this.uploadFiles()
      } else {
        await this.uploadSuccess()
      }
    })
  }

  async uploadFiles() {
    const { token } = await getUploadToken() as AxiosResponse["data"]
    this.uploadData.token = token
    this.$nextTick(() => {
      this.upload.submit()
    })
  }

  async uploadSuccess() {
    if(this.uploaded) {
      const params = JSON.parse(JSON.stringify(this.new_product))
      params.attrs = this.new_product.attrs.map(item => item.value)

      if(this.$route.params.id) {
        params.id = this.$route.params.id
        params.images = this.upload.uploadFiles.map((file: any) => {
          if(file.response) {
            return { name: file.response.key }
          } else {
            return { name: file.name }
          }
        })
        await updateProduct(params)
      } else {
        params.images = this.upload.uploadFiles.map((file: any) => {
          return { name: file.response.key }
        })
        await createProduct(params)
      }
      this.$router.go(-1)
    }
  }

  async created() {

    if(this.$route.params.id) {
      const category: any = this.$route.params.category
      const attrs: any = this.$route.params.attrs
      const images: any = this.$route.params.images
      const is_new: any = this.$route.params.is_new

      this.new_product = {
        category: category.id,
        title: this.$route.params.title,
        is_new,
        seo_title: this.$route.params.seo_title,
        seo_description: this.$route.params.seo_description,
        seo_keywords: this.$route.params.seo_keywords,
        images: [],
        attrs: attrs.map((item: string) => { return { value: item } }),
        details: this.$route.params.details
      }
      this.images = images.map((item: any) => { return { name: item.filename, url: item.src } })
    }
    const { data } = await getCategories()
    this.categoryNodes = data
  }
}
</script>
<style lang='scss' scoped>
.buttons {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 15px;
  button:not(:first-of-type) {
    margin-top: 10px;
  }
}
</style>
