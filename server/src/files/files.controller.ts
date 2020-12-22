import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
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
  async getFiles(){
    const repo = getRepository(File)
    let res = await repo.query('select dir from file where deleted_at is null group by dir')
    if(res.length > 0){
      for(let index in res){
        let item = res[index]
        let files = await repo.find({'dir':item.dir});
        res[index].files = files
      }
    }
    return {
      code: 20000,
      data: res
    }
  }

  @Get('/token')
  async getToken(){
    const token = this.service.getUploadToken()
    return {
      code: 20000,
      token
    }
  }

  @Post('/')
  async saveOne(@Body() params){
    const repo = getRepository(File)
    let {dir,files} = params
    files = this.service.serialize(files,dir)
    const docs = await repo.create(files)
    const res = await repo.save(docs)
    return {
      code: 20000,
      message: '上传成功',
      data: res
    }
  }


  @Delete('/')
  async delOne(@Query('id') id) {
    const file = await File.findOne(id)
    this.service.deleteResource(`${file.dir}/${file.filename}`)
    const res = await file.softRemove()
    return {
      code: 20000,
      message: '删除成功',
      data: res
    }
  }
}
