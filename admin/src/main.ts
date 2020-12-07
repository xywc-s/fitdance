/*
 * @Description: 
 * @Author: xywc_s
 * @Date: 2020-12-02 15:54:14
 */
import '@/styles/element-variables.scss'
import '@/styles/index.scss'
import ElementUI from 'element-ui'
import 'normalize.css'
import Vue from 'vue'
import SvgIcon from 'vue-svgicon'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(ElementUI)

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
