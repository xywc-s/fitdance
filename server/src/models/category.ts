import { Product } from './product';
import { BaseModel } from './base.model';
import { Column,Entity, OneToMany, Tree, TreeChildren, TreeParent } from 'typeorm';

@Entity()
@Tree('closure-table')
export class Category extends BaseModel {
  @Column({
    comment: '名称',
    unique: true,
    length: 20
  })
  name: string

  @TreeParent({
    onDelete: 'CASCADE'
  })
  parent: Category

  @TreeChildren({
    cascade: ['remove', 'insert','recover','update','soft-remove']
  })
  children: Category[]

  @OneToMany(()=> Product, product=>product.category, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  products: Product[]
}
