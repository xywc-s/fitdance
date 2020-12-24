export const state = () => ({
  menus: [{
    title: '首页',
    path: '/'
  }, {
    title: '斐丹丝',
    path: '/'
  }, {
    title: '芭蕾裙',
    path: '/'
  }, {
    title: '练功服',
    path: '/'
  }, {
    title: '客户案例(包含下单流程)',
    path: '/'
  }, {
    title: '新闻',
    path: '/'
  }, {
    title: '联系我们',
    path: '/'
  }],
  logo: '',
  qrcode: '',
  banner: [],
  materials: '',
  ballet: [],
  dancing: [],
  case: []
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
    console.error('fetch', JSON.parse(JSON.stringify(data)));
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
          default:
            break;
        }
      })
    }
  }
}
