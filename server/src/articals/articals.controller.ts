import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { CrudController } from '@nestjsx/crud';
import { getRepository } from 'typeorm';
import { Artical } from './../models/artical';
import { ArticalsService } from './articals.service';

@Controller('articals')
export class ArticalsController implements CrudController<Artical> {
  constructor(public service: ArticalsService){}

  get base(): CrudController<Artical>{
    return this
  }

  @Get('/')
  async getArticals(@Query() query){
    const {currentPage, pageSize} = query
    const res = await Artical.findAndCount({
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
    console.log(params);

    const repo = getRepository(Artical)
    const artical = repo.create(params)
    console.log(artical);
    const res = await repo.save(artical)
    return {
      code: 20000,
      data: res
    }
  }

  @Put('/')
  async updateOne(@Body() params){
    const repo = getRepository(Artical)
    const res = await repo.save(params)
    return {
      code: 20000,
      data: res
    }
  }

  @Delete('/')
  async delOne(@Query('id') id) {
    const artical = await Artical.findOne(id)
    const res = await artical.softRemove()
    console.log(id);
    console.log(res);
    return {
      code: 20000,
      data: res
    }
  }

}
