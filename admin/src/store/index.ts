import Vue from 'vue'
import Vuex from 'vuex'
import { ISettingsState } from './modules/settings'
import { IUserState } from './modules/user'

Vue.use(Vuex)

export interface IRootState {
  app: IAppStatess
  user: IUserState
  settings: ISettingsState
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})
