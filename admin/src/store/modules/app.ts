import store from '@/store'
import { getSidebarStatus, setSidebarStatus } from '@/utils/cookies'
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'

export enum DeviceType {
  Mobile,
  Desktop,
}

export interface IAppState {
  device: DeviceType
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  },
  image_domain: string
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {
  public sidebar = {
    opened: getSidebarStatus() !== 'closed',
    withoutAnimation: false
  }

  public device = DeviceType.Desktop
  public image_domain = ''

  @Mutation
  private TOGGLE_SIDEBAR(withoutAnimation: boolean) {
    this.sidebar.opened = !this.sidebar.opened
    this.sidebar.withoutAnimation = withoutAnimation
    if (this.sidebar.opened) {
      setSidebarStatus('opened')
    } else {
      setSidebarStatus('closed')
    }
  }

  @Mutation
  private CLOSE_SIDEBAR(withoutAnimation: boolean) {
    this.sidebar.opened = false
    this.sidebar.withoutAnimation = withoutAnimation
    setSidebarStatus('closed')
  }

  @Mutation
  private TOGGLE_DEVICE(device: DeviceType) {
    this.device = device
  }

  @Mutation
  public SET_IMAGE_DOMAIN(domain: string){
    this.image_domain = domain
  }

  @Action
  public ToggleSideBar(withoutAnimation: boolean) {
    this.TOGGLE_SIDEBAR(withoutAnimation)
  }

  @Action
  public CloseSideBar(withoutAnimation: boolean) {
    this.CLOSE_SIDEBAR(withoutAnimation)
  }

  @Action
  public ToggleDevice(device: DeviceType) {
    this.TOGGLE_DEVICE(device)
  }
}

export const AppModule = getModule(App)
