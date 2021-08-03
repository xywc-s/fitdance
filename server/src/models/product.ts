import { Category } from './category';
import { File } from './file';
import { AfterLoad, BeforeInsert, BeforeUpdate, Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from './base.model';

@Entity()
export class Product extends BaseModel {
  @Index()
  @Column({
    comment: '产品标题',
    length: 120
  })
  title: string

  @Column({
    comment: '产品主图',
    nullable: true
  })
  mainImage: string

  @Column({
    comment: '产品属性',
    array: true
  })
  attrs: string

  @Column({
    comment: '新品',
    type: 'boolean',
    default: 0
  })
  is_new: boolean

  @ManyToOne(()=> Category, category=> category.products, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    eager: true
  })
  category: Category

  @Column({
    comment: 'seo标题',
    length: 20,
    nullable: true
  })
  seo_title: string

  @Column({
    comment: 'seo描述',
    length: 120,
    nullable: true
  })
  seo_description: string

  @Column({
    comment: 'seo关键词',
    length: 48,
    nullable: true
  })
  seo_keywords: string

  @Column({
    comment: '产品详情',
    type: 'text',
    nullable: true
  })
  details: string

  @OneToMany(()=> File, file => file.product , {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE'
  })
  images: File[]

}
