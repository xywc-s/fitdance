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
  isLeftMinimizi: false,
  isRightMinimizi: false,
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
  category: [],

  // server data
  categories: [],
  categoryList: [],
  currentCategory: null,

  //产品列表
  total: 0,
  products: []
})

export const mutations = {
  set_file(state, { type, data }) {
    state[type] = data
  },

  set_files(state, { type, data }) {
    const files = data.map(file => file.src)
    state[type] = files
  },

  set_floatbar_status(state, { direction }) {
    if (direction === 'left') {
      state.isLeftMinimizi = !state.isLeftMinimizi
    } else if (direction === 'right') {
      state.isRightMinimizi = !state.isRightMinimizi
    }
  },

  set_data(state, { key, val }) {
    state[key] = val
  }

}

export const actions = {
  async getImages({ commit }) {
    const { data } = await this.$api.getImages()
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
  },

  async getCategories({ commit }) {
    const { data } = await this.$api.getCategories()
    commit('set_data', { key: 'categories', val: data })
  },

  async getCategory({ commit }, id) {
    const { data } = await this.$api.getCategory(id)
    commit('set_data', { key: 'currentCategory', val: data })
  },

  async getProducts({ commit }, filter) {
    const { data, total } = await this.$api.getProducts(filter)
    commit('set_data', { key: 'products', val: data })
    commit('set_data', { key: 'total', val: total })
  }
}
