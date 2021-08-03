<template>
  <div class="upload-container">
    <el-button
      :style="{background: color, borderColor: color}"
      icon="el-icon-upload"
      size="mini"
      type="primary"
      @click=" dialogVisible=true"
    >上传</el-button>
    <el-dialog :visible.sync="dialogVisible" :modal-append-to-body="false">
      <el-upload
        ref="upload"
        multiple
        :show-file-list="true"
        :auto-upload="false"
        :file-list="defaultFileList"
        :data="uploadData"
        :on-success="handleSuccess"
        :before-upload="file=>uploadData.key = `product/details/${Date.now()}/${file.name}`"
        class="editor-slide-upload"
        action="//up-z2.qiniup.com"
        list-type="picture-card"
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="handleSubmit">确认</el-button>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from 'vue-property-decorator'
import { getUploadToken } from '@/api/files'
import { AxiosResponse } from 'axios'

@Component({
  name: 'EditorImageUpload'
})
export default class extends Vue {
  @Prop({ required: true }) private color!: string

  @Ref() readonly upload!: HTMLFormElement

  private dialogVisible = false
  private cb_data: string[] = []
  private defaultFileList = []

  uploadData = {
    token: '',
    key: ''
  }

  get uploaded(): Boolean {
    if(this.upload.uploadFiles.length > 0) {
      return this.upload.uploadFiles.every((file: any) => file.status === 'success')
    }
    return false
  }

  private async handleSubmit() {
    const { token } = await getUploadToken() as AxiosResponse["data"]
    this.uploadData.token = token
    this.$nextTick(() => {
      this.upload.submit()
    })
  }

  private handleSuccess(response: any, file: any) {
    this.cb_data.push(file.response.key)
    if(this.uploaded) {
      this.$emit('success-callback', this.cb_data)
      this.cb_data = []
      this.defaultFileList = []
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss">
.editor-slide-upload {
  .el-upload--picture-card {
    width: 100%;
  }
}
</style>

<style lang="scss" scoped>
.editor-slide-upload {
  margin-bottom: 20px;
}
</style>
