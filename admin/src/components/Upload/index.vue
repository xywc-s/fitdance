<template>
  <div>
    <div class="mb-16">
      <el-input v-model="fileDir" disabled style="width:200px;" placeholder="请选择目录">
        <template slot="prepend">文件目录</template>
      </el-input>
      <el-select v-model="fileDir" class="ml-5" placeholder="请选择文件目录">
        <el-option v-for="(value,key) in dirOptions" :key="key" :label="value" :value="key"></el-option>
      </el-select>
    </div>
    <el-upload
      ref="upload"
      multiple
      list-type="picture-card"
      action="//up-z2.qiniup.com"
      :auto-upload="false"
      :data="uploadData"
      :before-upload="file => uploadData.key = `${fileDir}/${file.name}`"
      :on-success="uploadSuccess"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__tip" slot="tip">文件大小不超过4M</div>
    </el-upload>
    <el-button
      :disabled="upload?!(upload.uploadFiles.length && fileDir):true"
      type="success"
      class="mt-20"
      @click="uploadFiles"
    >确认上传</el-button>
  </div>
</template>

<script lang='ts'>
import { Component, Ref, Vue } from 'vue-property-decorator'
import { AxiosResponse } from 'axios'
import { getUploadToken, uploadFile } from '@/api/files';
import { FileModule } from '@/store/modules/file';

interface IuploadData {
  token: string,
  key: string
}

@Component({
  name: 'upload'
})
export default class extends Vue {
  @Ref() readonly upload!: HTMLFormElement

  fileDir = ''
  uploadData: IuploadData = {
    token: '',
    key: ''
  }

  get uploaded(): Boolean {
    if(this.upload.uploadFiles.length > 0) {
      return this.upload.uploadFiles.every((file: any) => file.status === 'success')
    }
    return false
  }

  get dirOptions() {
    return FileModule.dirOptions
  }

  async uploadFiles() {
    const { token } = await getUploadToken() as AxiosResponse["data"];
    this.uploadData.token = token
    this.$nextTick(() => {
      this.upload.submit()
    })
  }

  async uploadSuccess() {
    if(this.uploaded) {
      const files = this.upload.uploadFiles.map((file: any) => {
        file.type = file.raw.type
        delete file.raw
        return file
      })
      const dir = this.fileDir
      await uploadFile({ dir, files })
      this.$emit('close-dialog')
      this.init()
    }
  }
  init() {
    this.fileDir = ''
    this.upload.uploadFiles = []
  }
}
</script>
<style lang='scss'></style>
