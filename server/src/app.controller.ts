import { SettingService } from './setting/setting.service';
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
    const image_domain = process.env.QN_DOMAIN
    try {
      const {seo_title, seo_description,seo_keywords} = await this.settingService.getSetting()
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
}
