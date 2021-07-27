import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Setting } from './../models/setting';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SettingService extends TypeOrmCrudService<Setting>{
  constructor(@InjectRepository(Setting) repository){
    super(repository)
  }

  async getSetting(){
    const setting = await this.repo.findOneOrFail()
    if(setting) return setting
    return {
      seo_title: '',
      seo_description: '',
      seo_keywords: ''
    }
  }
}
