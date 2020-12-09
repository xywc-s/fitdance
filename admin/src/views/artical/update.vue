<template>
  <div style="padding:20px">
    <el-row>
      <el-col :span="1">
        <div class="buttons">
          <el-tooltip effect="dark" content="返回" placement="left">
            <el-button circle icon="el-icon-back" size="small" @click="$router.go(-1)"></el-button>
          </el-tooltip>
          <el-tooltip effect="dark" content="清空" placement="left">
            <el-button circle icon="el-icon-close" type="danger" size="small" @click="clear"></el-button>
          </el-tooltip>
          <el-tooltip effect="dark" content="保存" placement="left">
            <el-button circle icon="el-icon-check" type="success" size="small" @click="save"></el-button>
          </el-tooltip>
        </div>
      </el-col>
      <el-col :span="23">
        <el-input v-model="title" style="margin-bottom:10px">
          <template slot="prepend">文章标题</template>
        </el-input>
        <tinymce class="editor-content" v-if="tinymceActive" v-model="content" :height="800" />
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'
import Tinymce from '@/components/Tinymce/index.vue'
import { createArtical, updateArtical } from '@/api/articles'

interface IArtical {
  [Key: string]: string
}

@Component({
  name: 'update_artical',
  components: {
    Tinymce
  }
})
export default class extends Vue {
  @Prop({
    type: Object
  })
  artical?: IArtical

  tinymceActive: Boolean = true
  title: string = ''
  content: string = ''

  deactivated() {
    this.tinymceActive = false
  }

  activated() {
    this.tinymceActive = true
  }

  clear() {
    this.title = ''
    this.content = ''
  }

  async save() {
    console.log(this.content);
    const params = {
      title: this.title,
      content: this.content
    }
    if(this.artical) {
      this.$set(params, 'id', this.artical.id)
      const res = await updateArtical(params)
    } else {
      const res = await createArtical(params)
    }
    this.$notify.success(`${this.artical ? '更新' : '添加'}成功`)
    this.$router.go(-1)
  }

  created() {
    this.title = this.artical?.title || ''
    this.content = this.artical?.content || ''
  }
}
</script>
<style lang='scss' scoped>
.buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 15px;
  button:not(:first-of-type) {
    margin-top: 10px;
  }
}
</style>
