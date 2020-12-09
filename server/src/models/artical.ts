import { Column, Entity, Index } from "typeorm";
import { BaseModel } from './base.model';

@Entity()
export class Artical extends BaseModel {
  @Index()
  @Column({
    length: 50,
    comment: '标题',
    unique: true
  })
  title:string

  @Column({
    type: 'text',
    comment: '内容'
  })
  content:string
}
