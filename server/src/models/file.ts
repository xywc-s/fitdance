import { Product } from './product';
import { Column, Entity, ManyToOne } from "typeorm";
import { BaseModel } from './base.model';

export enum FileType {
  IMG = 0,
  VIDEO = 1
}

export const DIROPTIONS = {
  logo: 'Logo',
  qrcode: 'QRcode',
  banner: 'Banner图',
  category: '产品分类',
  ballet: '芭蕾裙',
  dancing: '舞蹈裙',
  case: '案例',
  materials: '原材料',
  factory: '工厂',
  process: '流程'
}

@Entity()
export class File extends BaseModel {
  @Column({
    comment:'文件名'
  })
  filename: string

  @Column({
    comment: '文件目录',
    nullable: true
  })
  dir: string

  @Column({
    type: 'enum',
    enum: FileType,
    default: FileType.IMG,
    comment: '文件类型',
  })
  type: FileType

  @Column({
    comment: '文件地址'
  })
  src:string

  @ManyToOne(()=> Product, product=> product.images, {
    'onDelete': 'CASCADE'
  })
  product: Product
}
