/*
 * @Description: 用户模型
 * @Author: xywc_s
 * @Date: 2020-11-30 16:52:23
 */
import { IsNotEmpty } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { BaseModel } from './base.model';

@Entity()
export class User extends BaseModel{
  @IsNotEmpty()
  @Column({
    comment: '用户名',
    unique: true
  })
  username: string;

  @Column({
    comment: '用户昵称',
    default:'用户'
  })
  name: string

  @IsNotEmpty()
  @Column({
    comment: '密码',
    select: false,
  })
  password: string;
}
