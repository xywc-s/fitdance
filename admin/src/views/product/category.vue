<template>
  <div class="pa-20">
    <el-button type="primary" size="small" @click="()=> dialogShow = true">创建分类</el-button>
    <el-divider></el-divider>
    <el-tree
      style="width:500px"
      :data="options"
      :props="{label: 'name'}"
      node-key="id"
      default-expand-all
      highlight-current
      :expand-on-click-node="false"
      :check-on-click-node="true"
    >
      <div class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button type="text" icon="el-icon-delete-solid" @click="remove(node, data)">删除</el-button>
        </span>
      </div>
    </el-tree>
    <el-dialog :visible.sync="dialogShow" title="创建分类" @close="dialogCloseHandler">
      <el-form ref="form" :model="form" label-position="left" label-width="110px">
        <el-form-item label="是否有父级分类">
          <el-radio-group v-model="form.hasParent">
            <el-radio :label="false">否</el-radio>
            <el-radio :label="true">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          v-if="form.hasParent"
          label="父级分类"
          prop="parent"
          :rules="{required: `${form.hasParent}`, message: '父级分类必选', trigger: ['blur', 'change']}"
        >
          <el-cascader
            v-model="form.parent"
            :options="options"
            :props="{ checkStrictly: true, expandTrigger: 'hover', emitPath: false,  value: 'id', label: 'name'}"
            clearable
          ></el-cascader>
        </el-form-item>
        <el-form-item
          label="分类名称"
          prop="name"
          :rules="{ required:true, message: '分类名称必填', trigger: 'blur'}"
        >
          <el-input v-model="form.name" maxlength="20" style="width:200px"></el-input>
        </el-form-item>
        <div class="mt-40">
          <el-button type="primary" @click="add">确认</el-button>
          <el-button @click="()=> dialogShow = false">取消</el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang='ts'>
import { createCategory, delCategory, getCategories } from '@/api/products'
import { Form as ElForm } from 'element-ui'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'category'
})
export default class extends Vue {
  dialogShow: boolean = false
  form = {
    hasParent: false,
    parent: undefined,
    name: ''
  }
  options = []

  private add() {
    (this.$refs.form as ElForm).validate(async (valid: boolean) => {
      if(!valid) return
      const params = {
        name: this.form.name
      }
      if(this.form.hasParent)
        Object.assign(params, { parent_id: this.form.parent })
      await createCategory(params)
      this.dialogShow = false
      this.getData()
    })
  }

  remove(node: any, data: any) {
    this.$confirm('删除当前分类，将同时删除当前分类下的所有产品，确认执行删除当前分类的操作吗？', '提醒', {
      type: 'warning'
    }).then(async () => {
      await delCategory({ id: data.id })
      this.getData()
    }).catch(() => { })
  }

  dialogCloseHandler() {
    this.form = {
      hasParent: false,
      parent: undefined,
      name: ''
    }
  }

  async getData() {
    const { data } = await getCategories()
    this.options = data
  }

  async mounted() {
    this.getData()
  }
}
</script>
<style lang='scss'>
.custom-tree-node {
  flex: 1;
  display: flex;
  width: 400px;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
