import { Category } from './../models/category';
import { CategoryService } from './../category/category.service';
import { Product } from './../models/product';
import { getManager, getRepository, getTreeRepository, In, Like } from 'typeorm';
import { FilesService } from 'src/files/files.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, Req } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(
    private readonly service: ProductService,
    private readonly file: FilesService,
    private readonly category: CategoryService
  ) {}

  @Get('/')
  async findAll(
    @Query('currentPage') page: number, 
    @Query('pageSize') pageSize:number, 
    @Query('categoryId') categoryId:number,
    @Query('filters') filters: any
  ){
    try {
      let categoryIds, queryFilters = {}
      if(categoryId){
        const parentCategory = await this.category.findOne(categoryId)
        const childrenCategories = await getTreeRepository(Category).findDescendants(parentCategory)
        // if(childrenCategories.length === 0)
        //   throw {message: '此分类不存在'}
        categoryIds = childrenCategories.map(category => category.id)
      }   
      let builder = Product.createQueryBuilder('product')
      builder.leftJoinAndSelect('product.images','images').leftJoinAndSelect('product.category','category')
      if(categoryIds) queryFilters = Object.assign(queryFilters, {category: {id: In(categoryIds)} })  
      if(filters){
        filters = JSON.parse(filters)
        if(filters.title) queryFilters = Object.assign(queryFilters, {title: Like(`%${filters.title}%`)})
        if(filters.categoryId) queryFilters =  Object.assign(queryFilters, {category: {id: filters.categoryId}}) 
        if(filters.is_new) queryFilters = Object.assign(queryFilters, {is_new: true})
      }
      if(Object.keys(queryFilters).length > 0) builder.where(queryFilters)
      const total = await builder.getCount()
      if(page !== 1 && total < page * pageSize){
        builder.take(total-(pageSize*(page-1))).skip((page-1)*pageSize).orderBy('product.id', 'DESC')
      } else{
        builder.take(pageSize).skip((page-1)*pageSize).orderBy('product.id', 'DESC')
      }
      const data = await builder.getMany()
      return {
        code: 20000,
        data,
        total
      }
    } catch (e) {
      return {
        code: 50001,
        message: e.message,
        title: e.detail
      }
    }
  }

  @Get(':id')
  async findOne(@Param('id') id){
    try {
      const product = await Product.findOne(id)
      return {
        code: 20000,
        data: product
      }
    } catch (e) {
      return {
        code: 50001,
        message: e.message,
        title: e.detail
      }
    }
  }

  @Post('/')
  async createOne(@Body() param){
    try {
      const images = await this.file.storeProductPictures(param.images, {saved: true})
      param.images = [...images]
      const category = await this.category.findOne(param.category)
      param.category = category
      const product = getRepository(Product).create(param)
      await Product.save(product)
      return {
        code: 20000,
        message: '创建成功！'
      }
    } catch (e) {
      return {
        code: 50001,
        message: e.message,
        title: e.detail
      }
    }
  }

  @Delete('/:id')
  async deleteOne(@Param('id') id){
    try {
      const data = await (await getRepository(Product).findOne(id)).remove()
      return {
        code: 20000,
        data
      }
    } catch (e) {
      return {
        code: 50001,
        message: e.message,
        title: e.detail
      }
    }
  }

  @Put('/')
  async updateOne(@Body() param){
    try {
      const product = await getRepository(Product).findOne(param.id)
      if(product.category.id !== param.category){
        const category = await this.category.findOne(param.category)
        product.category = category
      }
      const images = await this.file.storeProductPictures(param.images)
      product.attrs = param.attrs
      product.mainImage = param.mainImage
      product.is_new = param.is_new
      product.title = param.title
      product.seo_title = param.seo_title
      product.seo_description = param.seo_description
      product.seo_keywords = param.seo_keywords
      product.details = param.details
      await getManager().transaction(async manager => {
        await manager.remove(product.images)
        const imgs = await manager.save(images)
        product.images = [...imgs]
        await manager.save(product)
      })
      return {
        code: 20000,
        message: '更新成功！'
      }
    } catch (e) {
      return {
        code: 50001,
        message: e.message,
        title: e.detail
      }
    }
    
  }
}
