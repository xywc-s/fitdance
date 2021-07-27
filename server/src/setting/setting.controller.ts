import { getRepository } from 'typeorm';
import { Setting } from './../models/setting';
import { SettingService } from './setting.service';
import { Controller, Param, Put, Body } from '@nestjs/common';

@Controller('setting')
export class SettingController {
  constructor(
    public setting: SettingService 
  ){}

  @Put('')
  async updateSeoSetting(@Body() {seo_title, seo_description, seo_keywords}){
    try{
      const repo = getRepository(Setting)
      const setting = await repo.findOne()
      if(!setting){
        await repo.create({seo_title, seo_description, seo_keywords}).save()
      }else{
        setting.seo_title = seo_title
        setting.seo_description = seo_description
        setting.seo_keywords = seo_keywords
        await setting.save()
      }
      return {
        code: 20000,
        message: '设置成功！'
      }
    }catch(e){
      return {
        code: 50001,
        message: e.message
      }
    }
  }
}
