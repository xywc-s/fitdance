/*
 * @Description: 
 * @Author: xywc_s
 * @Date: 2020-11-30 13:47:51
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../models/user';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers:[UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
