/*
 * @Description: 
 * @Author: xywc_s
 * @Date: 2020-12-02 13:53:13
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from '../models/user';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(
    @InjectRepository(User) user
  ){
    super(user)
  }
}
