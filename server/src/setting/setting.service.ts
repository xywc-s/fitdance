import { Setting } from './../models/setting';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SettingService {
  constructor(
    @InjectRepository(Setting)
    private setting: Repository<Setting>
  ){}

  async getSetting(){
    const setting = await this.setting.findOneOrFail()
    if(setting) return setting
    return {
      seo_title: '',
      seo_description: '',
      seo_keywords: ''
    }
  }
}
