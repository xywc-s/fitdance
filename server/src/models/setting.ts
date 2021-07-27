import { Column, Entity } from 'typeorm';
import { BaseModel } from './base.model';

@Entity()
export class Setting extends BaseModel {
  @Column({
    comment: '产品seo标题',
    nullable: true
  })
  seo_title: string

  @Column({
    comment: '产品seo描述',
    nullable: true
  })
  seo_description:string

  @Column({
    comment: '产品seo关键词',
    nullable: true
  })
  seo_keywords:string
}
