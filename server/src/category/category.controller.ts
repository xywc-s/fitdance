import { Category } from '../models/category';
import { CategoryService } from './category.service';
import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { CrudController } from '@nestjsx/crud';
import { getRepository, getTreeRepository } from 'typeorm';

@Controller('categories')
export class CategoryController implements CrudController<Category> {
  constructor(public service: CategoryService){}

  get base(): CrudController<Category>{
    return this
  }

  @Get('/')
  async getCategories(@Query() query){
    const res = await getTreeRepository(Category).findTrees()
    return {
      code: 20000,
      data: res
    }
  }

  @Post('/')
  async saveOne(@Body() params){
    const { name, parent_id } = params
    const repo = getTreeRepository(Category)
    const category = repo.create({name})
    if(parent_id) category.parent = await Category.findOne(parent_id)
    try {
      const res = await repo.save(category)
      return {
        code: 20000,
        data: res,
        message: '创建成功!'
      }
    } catch (error) {
      return {
        code: 50001,
        message: error.message,
        title: error.detail,
      }
    }
    
  }

  @Put('/')
  async updateOne(@Body() params){
    const repo = getRepository(Category)
    const res = await repo.save(params)
    return {
      code: 20000,
      data: res
    }
  }

  @Delete('/')
  async delOne(@Query('id') id) {
    try {
      const res = await Category.delete(id)
      return {
        code: 20000,
        data: res,
        message: '删除成功!'
      }
    } catch (error) {
      return {
        code: 50001,
        message: error.message,
        title: error.detail,
      }
    }
  }

}
