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
    return this.setting.findOne()
  }
}
