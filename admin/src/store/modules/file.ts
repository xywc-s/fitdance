import store from '@/store';
import { getDirOptions, getFilesCookie, setDirOptions, setFilesCookie } from '@/utils/cookies';
import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';

export interface IFileState {
  files: any[],
  dirOptions: any
}

@Module({dynamic: true, store, name: 'file'})
class File extends VuexModule implements IFileState{
  public files: any[] = getFilesCookie() || []
  public dirOptions: any = getDirOptions() || []

  @Mutation
  public SET_FILES(files:any[]){
    this.files = files
    setFilesCookie(JSON.stringify(files))
  }

  @Mutation
  public SET_DIR_OPTIONS(options:any){
    this.dirOptions = options
    setDirOptions(JSON.stringify(options))
  }
}

export const FileModule = getModule(File)
