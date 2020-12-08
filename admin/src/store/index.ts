import Vue from 'vue'
import Vuex from 'vuex'
import { IAppState } from './modules/app'
import { ISettingsState } from './modules/settings'
import { IUserState } from './modules/user'

Vue.use(Vuex)

export interface IRootState {
  app: IAppState
  user: IUserState
  settings: ISettingsState
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})
