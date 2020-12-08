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
    ></avue-crud>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { AxiosResponse } from 'axios'
import { delFile, getFiles, updateFile, uploadFile } from '@/api/files';

@Component({
  name: 'file',
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
    column: [
      {
        label: 'ID',
        prop: 'id',
        hide: true,
        addDisplay: false,
        editDisplay: false
      },
      {
        label: '账号',
        prop: 'username',
        editDetail: true
      },
      {
        label: '密码',
        prop: 'password',
        type: 'password',
        hide: true
      },
      {
        label: '用户名',
        prop: 'name'
      },
      {
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
    const { data, total } = await getFiles(params) as AxiosResponse["data"]
    setTimeout(() => {
      this.loading = false
    }, 500)
    this.data = data
    this.page.total = total
  }

  async rowSave(row: any, done: any, loading: any) {
    const { name, username, password } = row
    this.loadingDown(loading)
    await uploadFile({ name, username, password })
    done()
    this.refresh()
    this.$notify.success('创建成功')
  }

  async rowUpdate(row: any, index: any, done: any, loading: any) {
    const { id, name, username, password } = row
    let params
    if(password) params = { id, name, username, password }
    else params = { id, name, username }
    this.loadingDown(loading)
    await updateFile(params)
    done()
    this.refresh()
    this.$notify.success('更新成功')
  }

  async rowDel(row: any) {
    const id = row.id
    await delFile({ id })
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
<style lang='scss'></style>
vt
