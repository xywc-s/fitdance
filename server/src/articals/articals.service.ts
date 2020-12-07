import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Artical } from '../models/artical';

@Injectable()
export class ArticalsService extends TypeOrmCrudService<Artical> {
  constructor(@InjectRepository(Artical) repository){
    super(repository)
  }
}
