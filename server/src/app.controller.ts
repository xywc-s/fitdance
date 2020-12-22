import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DIROPTIONS } from './models/file';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/statics')
  getStaticsData(){
    const dirOptions = DIROPTIONS

    return {
      code: 20000,
      data: {
        dirOptions
      }
    }
  }
}
