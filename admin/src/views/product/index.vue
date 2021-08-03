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
          :src="scope.row.mainImage || scope.row.images[0].src"
          fit="cover"
        ></el-image>
      </template>
      <template slot="title" slot-scope="scope">
        <div>
          <el-tag v-if="scope.row.is_new" class="mr-5" size="mini" type="danger" hit>新品</el-tag>
          <span>{{scope.row.title}}</span>
        </div>
      </template>
      <template slot="menuLeft">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="small"
          @click.stop="$router.push({name: 'product-edit'})"
        >新增</el-button>
      </template>
      <template slot="menuRight">
        <div style=" display: inline-block">
          <el-input
            v-model="filters.title"
            style="width: 280px;margin-right: 10px"
            placeholder="标题"
            clearable
          ></el-input>
          <el-cascader
            v-model="filters.category"
            style="width: 280px !important;;margin-right: 10px"
            :options="categoryNodes"
            placeholder="分类"
            :props="{ checkStrictly: true, emitPath: false,  value: 'id', label: 'name'}"
            clearable
          ></el-cascader>
          <el-button circle size="small" icon="el-icon-search" @click="search"></el-button>
        </div>
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
import { delProduct, getCategories, getProducts } from '@/api/products'
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

  filters = {
    title: '',
    category: NaN
  }

  categoryNodes = []

  option = {
    addBtn: false,
    editBtn: false,
    delBtn: false,
    header: true,
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
        slot: true,
      },
      {
        label: '产品分类',
        prop: 'category',
        bind: 'category.name',
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
    this.$router.push({ name: 'product-edit', query: { id: row.id } })
  }

  async rowDel(row: any) {
    const id = row.id
    await delProduct(id)
    this.refresh()
    this.$notify.success('删除成功')
  }

  async refresh() {
    this.filters = {
      title: '',
      category: NaN
    }
    const { pageSize, currentPage } = this.page
    this.getList({ pageSize, currentPage })
  }

  search() {
    let filters = {}
    if(this.filters.title)
      this.$set(filters, 'title', this.filters.title)
    if(this.filters.category)
      this.$set(filters, 'categoryId', this.filters.category)
    if(Object.keys(filters).length === 0)
      return this.$message.warning('需要搜索条件！')
    this.page.currentPage = 1
    this.getList({ currentPage: 1, pageSize: this.page.pageSize, filters })
  }

  loadingDown(loading: any) {
    setTimeout(() => {
      loading()
    }, 1000)
  }

  async created() {
    console.log('created:', 1);

    const { data } = await getCategories()
    this.categoryNodes = data

  }
}
</script>
<style lang='scss'></style>
