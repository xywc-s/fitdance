import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { File, FileType } from '../models/file';
const qiniu:any = require('qiniu');
@Injectable()
export class FilesService extends TypeOrmCrudService<File> {
  constructor(@InjectRepository(File) repository) {
    super(repository)
  }

  private qiniu = qiniu

  private domain = process.env.QN_DOMAIN
  private accessKey = process.env.QN_ACCESS_KEY
  private secretKey = process.env.QN_SECRET_KEY
  private bucket = process.env.QN_BUCKET

  private mac = new qiniu.auth.digest.Mac(this.accessKey, this.secretKey);

  private config = new qiniu.conf.Config();
  // config.useHttpsDomain = false;
  // config.zone = qiniu.zone.Zone_z2;

  public options = {
    scope: this.bucket,
    expires: 300
  };


  // private formUploader = new qiniu.form_up.FormUploader(config);
  // private putExtra = new qiniu.form_up.PutExtra();

  getUploadToken(){
    const putPolicy = new qiniu.rs.PutPolicy(this.options);
    return putPolicy.uploadToken(this.mac);
  }

  getManaer(){
    this.config.useHttpsDomain = false;
    this.config.zone = qiniu.zone.Zone_z2;
    return new qiniu.rs.BucketManager(this.mac, this.config);
  }

  typeFormatter(type: string){
    type = type.split('/')[0]
    switch (type) {
      case 'image':
        return FileType.IMG
        break;
      case 'video':
        return FileType.VIDEO
      default:
        return FileType.IMG
        break;
    }
  }

  serialize(files: any | Array<any>, dir:string){
    return files.map(file => {
      return {
        filename: file.name,
        dir: dir,
        type: this.typeFormatter(file.type),
        src: `${process.env.QN_DOMAIN}/${dir}/${file.name}`
      }
    })
  }

  /**
   * 
   * @param key 要删除的资源的key
   */
  async deleteResource(key: string){
    const manager = this.getManaer();
    manager.delete(this.bucket, key, function(err,respBody, respInfo) {
        if(err){
          throw new Error(err)
        }else{
          if(respInfo.statusCode !== 200) throw new Error(respBody.error)
        }
      })
  }

}
