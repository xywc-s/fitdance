import { SettingService } from './setting/setting.service';
import { getRepository } from 'typeorm';
import { Setting } from './models/setting';
import { Controller, Get, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { DIROPTIONS } from './models/file';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly settingService: SettingService
  ) {}

  @Get('/statics')
  async getStaticsData(){
    const dirOptions = DIROPTIONS
    const {seo_title, seo_description,seo_keywords} = await this.settingService.getSetting()
    const image_domain = process.env.QN_DOMAIN
    try {
      return {
        code: 20000,
        data: {
          dirOptions,
          seo: {
            seo_title, 
            seo_description, 
            seo_keywords
          },
          image_domain
        }
      }
    } catch (error) {
      return {
        code: 50001,
        message: error.message
      }
    }
  }

  // @Put('/setting')
  // async updateSeoSetting(@Param() params){
  //   try{
  //     const setting = getRepository(Setting).create(params)
  //     await Setting.save(setting)
  //     return {
  //       code: 20000,
  //       message: '设置成功！'
  //     }
  //   }catch(e){
  //     return {
  //       code: 50001,
  //       message: e.message
  //     }
  //   }
  // }
}
