import { IProductState } from '@/store/modules/product';
import Vue from 'vue';
import Vuex from 'vuex';
import { IAppState } from './modules/app';
import { IFileState } from './modules/file';
import { ISettingsState } from './modules/settings';
import { IUserState } from './modules/user';

Vue.use(Vuex)

export interface IRootState {
  app: IAppState
  user: IUserState
  settings: ISettingsState
  file: IFileState,
  product: IProductState
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})
