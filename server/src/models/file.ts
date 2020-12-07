import { Column, Entity } from "typeorm";
import { BaseModel } from './base.model';

export enum FileType {
  Img = 0,
  Video = 1
}

@Entity()
export class File extends BaseModel {
  @Column({
    comment:'文件名'
  })
  filename: string

  @Column({
    type: 'enum',
    enum: FileType,
    default: FileType.Img,
    comment: '文件类型',
  })
  type: FileType

  @Column({
    comment: '文件地址'
  })
  src:string
}
