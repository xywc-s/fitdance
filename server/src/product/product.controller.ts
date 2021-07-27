import { CategoryService } from './../category/category.service';
import { Product } from './../models/product';
import { getManager, getRepository } from 'typeorm';
import { FilesService } from 'src/files/files.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, Req } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(
    private readonly service: ProductService,
    private readonly file: FilesService,
    private readonly caterory: CategoryService
  ) {}

  @Get('/')
  async findAll(@Query('currentPage') page: number, @Query('pageSize') pageSize:number){
    try {
      const [data, total] = await Product.findAndCount({
        'take': pageSize,
        'skip': page-1,
      })
      
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

  @Post('/')
  async createOne(@Body() param){
    try {
      const images = await this.file.storeProductPictures(param.images, {saved: true})
      param.images = [...images]
      const category = await this.caterory.findOne(param.category)
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
        const category = await this.caterory.findOne(param.category)
        product.category = category
      }
      const images = await this.file.storeProductPictures(param.images)
      product.attrs = param.attrs
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
