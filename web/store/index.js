export const state = () => ({
  menus: [{
    title: '首页',
    path: '/'
  }, {
    title: '斐丹丝',
    path: '/fitdance'
  }, {
    title: '芭蕾裙',
    path: '/ballet'
  }, {
    title: '练功服',
    path: '/dancing'
  }, {
    title: '客户案例',
    path: '/cases'
  }, {
    title: '新闻中心',
    path: '/news'
  }, {
    title: '联系我们',
    path: '/about'
  }],
  datas: [{
    number: 21,
    unit: '年',
    sub: '设计、生产经验'
  }, {
    number: 10000,
    unit: '平方米',
    sub: '生产基地'
  }, {
    number: '5-15',
    unit: '天',
    sub: '快速发货'
  }, {
    number: '100000+',
    unit: '',
    sub: '每月产量'
  }],
  tel: '137-0720-8559',
  logo: '',
  qrcode: '',
  banner: [],
  materials: '',
  ballet: [],
  dancing: [],
  case: [],
  factory: [],
  process: [],
  category: []
})

export const mutations = {
  set_file(state, { type, data }) {
    state[type] = data
  },

  set_files(state, { type, data }) {
    const files = data.map(file => file.src)
    state[type] = files
  }

}

export const actions = {
  async getImages({ commit }) {
    const data = await this.$api.getImages()
    if (data.length > 0) {
      data.map(item => {
        switch (item.dir) {
          case 'logo':
            commit('set_file', { type: 'logo', data: item.files[0].src })
            break;
          case 'qrcode':
            commit('set_file', { type: 'qrcode', data: item.files[0].src })
            break;
          case 'materials':
            commit('set_file', { type: 'materials', data: item.files[0].src })
            break;
          case 'banner':
            commit('set_files', { type: 'banner', data: item.files })
            break;
          case 'ballet':
            commit('set_files', { type: 'ballet', data: item.files })
            break;
          case 'dancing':
            commit('set_files', { type: 'dancing', data: item.files })
            break;
          case 'case':
            commit('set_files', { type: 'case', data: item.files })
            break;
          case 'factory':
            commit('set_files', { type: 'factory', data: item.files })
            break;
          case 'process':
            commit('set_files', { type: 'process', data: item.files })
            break;
          case 'category':
            commit('set_files', { type: 'category', data: item.files })
            break;
          default:
            break;
        }
      })
    }
  }
}
