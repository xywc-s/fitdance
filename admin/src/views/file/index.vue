<template>
  <div class="pa-20" :loading="loading">
    <header class="pb-20">
      <el-row>
        <el-button type="primary" @click="dialogShow = true">上传文件</el-button>
      </el-row>
    </header>
    <el-row :gutter="20" type="flex" class="wrapper">
      <el-col v-for="(item, i) in data" :key="i" class="mb-20 item">
        <el-card
          class="album"
          shadow="hover"
          :body-style="{padding:0}"
          @click.native="viewAlbum(item)"
        >
          <el-row type="flex" slot="header" justify="space-between">
            <div>
              <strong>{{options[item.dir]}}</strong>
            </div>
            <div>
              <strong>({{item.files.length}})</strong>
            </div>
          </el-row>
          <el-row
            type="flex"
            justify="center"
            align="middle"
            style="width:100%;height: 200px; overflow:hidden"
          >
            <el-image class="image" :src="item.files[0].src" fit="contain"></el-image>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog :visible.sync="dialogShow" title="上传">
      <upload @close-dialog="()=>{dialogShow = false;getList()}"></upload>
    </el-dialog>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { getFiles } from '@/api/files';
import Upload from '@/components/Upload/index.vue';
import { AxiosResponse } from 'axios'
import { FileModule } from '@/store/modules/file';

@Component({
  name: 'file',
  components: {
    Upload
  }
})
export default class extends Vue {
  loading: Boolean = false
  dialogShow: Boolean = false
  data = []

  get options() {
    return FileModule.dirOptions
  }

  async viewAlbum({ dir, files }: any) {
    FileModule.SET_FILES(files)
    this.$router.push(`/file/details?key=${dir}`)
  }

  async getList() {
    this.loading = true
    const { data } = await getFiles() as AxiosResponse["data"]
    this.data = data
    setTimeout(() => {
      this.loading = false
    }, 500)
  }

  mounted() {
    this.getList();
  }

}
</script>
<style lang='scss' scoped>
.album {
  &:hover {
    cursor: pointer;
  }
}
.wrapper {
  flex-wrap: wrap;
  .item {
    flex-basis: 320px;
    .image {
      height: 100%;
    }
  }
}
</style>

