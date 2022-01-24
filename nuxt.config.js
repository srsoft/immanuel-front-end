export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: {
    baseUrl: process.env.BASE_URL || 'http://172.30.1.15:8003',
    imageUrl: process.env.IMAGE_URL || 'http://172.30.1.15:8003/storage/',
    moduleUrl: process.env.MODULE_URL || 'http://172.30.1.15:8003/api/module/'
  },
  ssr: false,
  head: {
    title: 'immanuel live',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/images',
    '@/plugins/moment',
    '@/plugins/service'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://172.30.1.15:8003/api',
    proxy: true
    // baseURL: 'http://www.immanuel.live:8000/api'
  },
  proxy: {
    '/api/': 'http://172.30.1.15:8003/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    port: 8001
  },

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://172.30.1.15:8003',
        // url: 'http://www.immanuel.live:8000',
        endpoints: {
          login: { url: '/api/login' },
          logout: { url: '/api/logout' },
          user: { url: '/api/user' }
        },
        user: {
          property: false
        },
        redirect: {
          login: '/login',
          logout: '/',
          home: '/'
        }
      }
    }
  }

  // serverMiddleware: [
  //   { path: '/api', handler: '~/api/index.js' }
  // ]

}
