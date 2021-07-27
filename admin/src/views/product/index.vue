<template>
  <div class="pa-20">
    <header></header>
    <avue-crud
      ref="crud"
      :table-loading="loading"
      :data="data"
      :page.sync="page"
      :option="option"
      @on-load="listLoad"
      @row-del="rowDel"
      @refresh-change="refresh"
    >
      <template slot="images" slot-scope="scope">
        <el-image
          style="width: 60px; height: 60px; border-radius: 5px"
          :src="scope.row.images[0].src"
          fit="cover"
        ></el-image>
      </template>
      <template slot-scope="scope" slot="menuLeft">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="small"
          @click.stop="$router.push({name: 'product-edit'})"
        >新增</el-button>
      </template>
      <template slot-scope="{row,type,size}" slot="menu">
        <el-button :type="type" icon="el-icon-edit" :size="size" @click="rowUpdate(row)">编辑</el-button>
        <el-button :type="type" icon="el-icon-delete" :size="size" @click="rowDel(row)">删除</el-button>
        <!-- <el-button type="success" icon="el-icon-check" size="small" plain @click.stop="$refs.crud.rowView(row,index)">查看</el-button> -->
      </template>
    </avue-crud>
  </div>
</template>

<script lang='ts'>
import { delProduct, getProducts } from '@/api/products'
import { AxiosResponse } from 'axios'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'product'
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
    addBtn: false,
    editBtn: false,
    delBtn: false,
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
        label: '产品图',
        prop: 'images',
        slot: true
      },
      {
        label: '产品标题',
        prop: 'title',
        addDisplay: false,
        editDisplay: false
      },
      {
        label: '产品分类',
        prop: 'category',
        bind: 'category.name'
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
    const { data, total } = await getProducts(params) as AxiosResponse["data"]
    this.page.total = total
    this.data = data
    setTimeout(() => {
      this.loading = false
    }, 300);
  }

  async rowUpdate(row: any) {
    this.$router.push({ name: 'product-edit', params: JSON.parse(JSON.stringify(row)) })
  }

  async rowDel(row: any) {
    const id = row.id
    await delProduct(id)
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
