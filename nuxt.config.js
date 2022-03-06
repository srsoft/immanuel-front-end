export default {
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

  css: [
    '~assets/css/main'
  ],

  plugins: [
    '@/plugins/images',
    '@/plugins/moment',
    '@/plugins/service'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  axios: {
    baseURL: process.env.BASE_URL,
    proxy: false
  },

  build: {
  },

  server: {
    port: 8001
  },

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.AUTH_URL,
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

}
