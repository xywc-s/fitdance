import App from '@/App.vue'
import '@/icons/components'
import '@/permission'
import router from '@/router'
import store from '@/store'
import '@/styles/element-variables.scss'
import '@/styles/index.scss'
import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'
import ElementUI from 'element-ui'
import 'normalize.css'
import Vue from 'vue'
import SvgIcon from 'vue-svgicon'

Vue.use(ElementUI)
Vue.use(Avue);
Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
