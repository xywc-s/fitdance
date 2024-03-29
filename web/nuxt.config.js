// import colors from 'vuetify/es5/util/colors'

export default {
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'zh_Hans',
      amp: true
    },
    titleTemplate: 'Fitdance - %s',
    title: '斐丹丝',
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width' },
      { name: 'author', content: '易长松 | Erain-s | xywc_s@foxmail.com' },
      { hid: 'keywords', name: 'keywords', content: 'fitdance,斐丹丝,练功服,舞蹈裙,芭蕾舞裙,定制,厂家,源头工厂' },
      { hid: 'description', name: 'description', content: '斐丹丝官方网站,提供最专业的舞蹈服、练功服、芭蕾舞裙服装定制与生产服务,为千万家舞蹈培训机构和学校提供满意的产品.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/favicon.ico' }
    ]
  },

  server: {
    port: 3001
  },

  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { y: 0 }
      }
    }
  },

  pageTransition: 'page',

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios',
    '~/plugins/api',
    '~/plugins/email'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.BASE_URL,
    proxy: true
  },
  proxy: {
    '/api/': { target: 'http://localhost:8088', pathRewrite: { '^/api/': '' } }
  },

  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss', '~/assets/overrides.scss'],
    treeShake: true,
    theme: {
      //   dark: true,
      themes: {
        light: {
          primary: '#d33266',
          // accent: colors.grey.darken3,
          // secondary: colors.amber.darken3,
          // info: colors.teal.lighten1,
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['emailjs-com', 'js-cookie']
  }
}
