<template>
  <div class="pa-20">
    <header class="pb-20">
      <el-row>
        <el-tag type="primary" size>
          <i class="el-icon-folder-opened"></i>
          {{$route.query.key.toUpperCase()}}
        </el-tag>
        <el-divider></el-divider>
      </el-row>
    </header>
    <el-row :gutter="20" type="flex" class="wrapper">
      <el-col v-for="(file, i) in files" :key="i" class="item">
        <el-image class="image" fit="contain" :src="file.src" :preview-src-list="list"></el-image>
        <div>
          <span class="mr-10">{{file.filename}}</span>
          <el-button type="text" @click="delHandle(file)">删除</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts'>
import { delFile } from '@/api/files';
import { FileModule } from '@/store/modules/file';
import { getFilesCookie, removeFilesCookie, setFilesCookie } from '@/utils/cookies';
import { Component, Vue } from 'vue-property-decorator'
import { Route } from 'vue-router';

Component.registerHooks([
  'beforeRouteLeave'
])

@Component({
  name: 'file-details'
})
export default class extends Vue {


  get files() {
    return FileModule.files
  }

  get list() {
    if(this.files.length === 0) return []
    return this.files.map((file: any) => file.src)
  }

  async delHandle(file: any) {
    try {
      await this.$confirm(`确认删除文件${file.filename}吗?`, '删除')
      await delFile({ id: file.id })
      this.delAfterHandle(file)
    } catch(e) { }
  }

  delAfterHandle(file: any) {
    const index = FileModule.files.findIndex((item: any) => item.id === file.id)
    FileModule.files.splice(index, 1)
    if(this.files.length === 0) this.$router.push('/file')
  }

  beforeRouteLeave(to: Route, from: Route, next: any) {
    removeFilesCookie();
    next()
  }

}
</script>
<style lang='scss' scoped>
.wrapper {
  flex-wrap: wrap;
  text-align: center;

  .item {
    flex-basis: 240px;
    height: 160px;
    .image {
      max-width: 100%;
      height: 80%;
    }
  }
}
</style>
