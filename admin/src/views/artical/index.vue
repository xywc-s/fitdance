<template>
  <div>
    <header></header>
    <avue-crud
      :table-loading="loading"
      :data="data"
      :page.sync="page"
      :option="option"
      @on-load="listLoad"
      @row-save="rowSave"
      @row-update="rowUpdate"
      @row-del="rowDel"
      @refresh-change="refresh"
    >
      <div slot="menuLeft">
        <el-button
          icon="el-icon-plus"
          type="primary"
          size="small"
          @click="$router.push({name:'artical-update'})"
        >新 增</el-button>
      </div>
      <template slot="menu" slot-scope="{row,size,type}">
        <el-button
          @click="$router.push({name:'artical-update', params:{ artical: row}})"
          :size="size"
          :type="type"
          icon="el-icon-edit"
        >编辑</el-button>
        <el-button @click="delOne(row)" :size="size" :type="type" icon="el-icon-delete">删除</el-button>
      </template>
    </avue-crud>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { AxiosResponse } from 'axios'
import { delArtical, getArticals } from '@/api/articles'

@Component({
  name: 'artical'
})
export default class extends Vue {
  loading: Boolean = false

  data = []

  page = {
    pageSize: 10,
    currentPage: 1,
    total: 0
  }

  option = {
    align: 'center',
    menuAlign: 'center',
    menuPostion: 'center',
    columnBtn: false,
    addBtn: false,
    // menu: false,
    editBtn: false,
    delBtn: false,
    column: [
      {
        label: 'ID',
        prop: 'id',
        width: 80,
        // hide: true,
        addDisplay: false,
        editDisplay: false
      },
      {
        label: '标题',
        prop: 'title',
        editDetail: true
      },
      {
        width: 200,
        label: '创建日期',
        prop: 'created_at',
        type: 'date',
        format: 'yyyy-MM-dd hh:mm:ss',
        valueFormat: 'yyyy-MM-dd hh:mm:ss',
        addDisplay: false,
        editDisplay: false
      }
    ]
  }

  async listLoad(page: any) {
    const { currentPage, pageSize } = page
    await this.getList({ currentPage, pageSize })
  }

  async getList(params: any) {
    this.loading = true
    const { data, total } = await getArticals(params) as AxiosResponse["data"]
    setTimeout(() => {
      this.loading = false
    }, 500)
    this.data = data
    this.page.total = total
  }

  async delOne(row: any) {
    const id = row.id
    await delArtical({ id })
    this.refresh()
    this.$notify.success('删除成功')
  }

  async refresh() {
    const { pageSize, currentPage } = this.page
    this.getList({ pageSize, currentPage })
  }

  loadingDown(loading: any) {
    setTimeout(() => {
      loading()
    }, 1000)
  }

}
</script>
<style lang='scss' scoped>
.editor-content {
  margin-top: 20px;
}
</style>
