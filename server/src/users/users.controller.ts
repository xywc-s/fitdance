/*
 * @Description: 
 * @Author: xywc_s
 * @Date: 2020-11-30 13:47:34
 */
import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { CrudController } from '@nestjsx/crud';
import loginDTO from 'src/dto/auth';
import { getRepository } from 'typeorm';
import { User } from '../models/user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService){}

  get base(): CrudController<User> {
    return this;
  }

  @Post('/login')
  login(@Body() user: loginDTO){
    return {
      code: 20000,
      data:{
        accessToken: 'admin'
      }
    }
  }

  @Post('/logout')
  logout(@Body() user: loginDTO){
    return {
      code: 20000
    }
  }

  @Post('/info')
  info(){
    return {
      code:20000,
      data:{
        user:{
          roles:["admin"],
          name: "Admin",
          avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
        }
      }
    }
  }

  @Get('/')
  async lists(@Query() params){
    const {pageSize, currentPage} = params
    const users = await User.findAndCount({
      skip: pageSize*(currentPage-1),
      take: pageSize,
      order:{
        id:"ASC"
      }
    })
    return {
      code: 20000,
      data: users[0],
      total: users[1]
    }
  }

  @Post('/')
  async saveOne(@Body() params){
    const repo = getRepository(User)
    const user = await repo.create(params)
    const res = await repo.save(user)
    return {
      code: 20000,
      data: res
    }
  }

  @Put('/')
  async updateOne(@Body() params){
    const repo = getRepository(User)
    const res = await repo.save(params)
    return {
      code: 20000,
      data: res
    }
  }

  @Delete('/')
  async delOne(@Query('id') id) {
    const user = await User.findOne(id)
    const res = await user.softRemove()
    return {
      code: 20000,
      data: res
    }
  }
}
