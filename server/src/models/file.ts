import { Column, Entity } from "typeorm";
import { BaseModel } from './base.model';

export enum FileType {
  IMG = 0,
  VIDEO = 1
}

export const DIROPTIONS = {
  common: '公共文件夹',
  product: '产品文件夹',
  case: '案例文件夹'
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
}
