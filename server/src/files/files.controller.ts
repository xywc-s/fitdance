import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { CrudController } from '@nestjsx/crud';
import { FilesService } from 'src/files/files.service';
import { getRepository } from 'typeorm';
import { File } from './../models/file';

@Controller('files')
export class FilesController implements CrudController<File> {
  constructor(public service: FilesService) {}

  get base() :CrudController<File>{
    return this
  }

  @Get('/')
  async getArticals(@Query() query){
    const {currentPage, pageSize} = query
    const res = await File.findAndCount({
      skip: (currentPage-1)*pageSize,
      take: pageSize,
      order: {
        id: "DESC"
      }
    })
    return {
      code: 20000,
      data: res[0],
      total: res[1]
    }
  }

  @Post('/')
  async saveOne(@Body() params){
    const repo = getRepository(File)
    const file = await repo.create(params)
    const res = await repo.save(file)
    return {
      code: 20000,
      data: res
    }
  }

  @Put('/')
  async updateOne(@Body() params){
    const repo = getRepository(File)
    const res = await repo.save(params)
    return {
      code: 20000,
      data: res
    }
  }

  @Delete('/')
  async delOne(@Query('id') id) {
    const file = await File.findOne(id)
    const res = await file.softRemove()
    console.log(id);
    console.log(res);
    return {
      code: 20000,
      data: res
    }
  }
}
