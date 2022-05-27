export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-test',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/app.scss', 
    '@/assets/css/font-awesome.css',
    '@/assets/css/custom.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-star-rating.js', mode: 'client' },
    { src: '~/plugins/vue-toasted.js', mode: 'client' },
    // { src: '~/plugins/vue-paycard.js', mode: 'client' },
    // { src: '~/plugins/vue-mask.js', mode: 'client' },
    { src: '~/plugins/vue-the-mask.js', mode: 'client' },
    { src: '~/plugins/vue-radial-progress-bar.js', mode: 'client' },
    { src: '~/plugins/vue-js-toggle-btn.js', mode: 'client' },
    // { src: '~/plugins/vue-paycard.js', mode: 'client' },
    // { src: '~/plugins/vue-mask.js', mode: 'client' },
    // { src: '~/plugins/vue-the-mask.js', mode: 'client' },
    // { src: '~/plugins/vue-slick-carousel.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/moment',
    ['@nuxtjs/laravel-echo', {
      broadcaster: 'pusher',
      key: process.env.PUSHER_APP_KEY,
      cluster: process.env.PUSHER_CLUSTER,
      forceTLS: false,
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/i18n',
    '@nuxtjs/toast',
    // ['nuxt-tailvue', {toast: true}]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  fontawesome: {
    icons: {
      solid: [
        'faUser',
        'faPlus',
        'faBarsStaggered',
        'faChevronDown',
        'faChevronUp',
        'faFilter',
        'faMoneyBill',
        'faLineChart',
        'faCircle',
        'faArrowRightLong',
        'faArrowLeftLong',
        'faPencil',
        'faSearch',
        'faMapMarker',
        'faLocationDot',
        'faStar',
        'faHeart',
        'faEyeSlash',
        'faCreditCard',
        'faCamera',
        'faCircleCheck',
        'faCircleXmark',
      ]
    }
  },
  // loading: {
  //   color: 'blue',
  //   height: '5px'
  // },
  // loading: '~/components/PageLoader.vue',
  router: {
    middleware: ['withrole', 'completed']
  },

  axios: {
    baseUrl: process.env.API_URL,
  },
  i18n: {
    locales: [
      {
        code: 'ar',
        file: 'ar/index.js',
      },
      {
        code: 'en',
        file: 'en/index.js',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    // locale: 'ar',
    // fallbackLocale: 'ar',
    // defaultLocale: 'ar',
  },
  auth: {
    plugins: ['@/plugins/auth-lang-redirect.js'],
    redirect: {
      login: '/signin',
      home: '/startups',
      logout: '/signin',
    },
    strategies: {
      local: {
        url: process.env.API_URL,
        endpoints: {
          login: {
            url: '/api/login',
            method: 'post',
            propertyName: 'data.token',
          },
          user: {
            url: '/api/user',
          },
        },
        token: {
          property: 'data.token',
          type: 'Bearer',
        },
        user: {
          property: false,
        },
      },
      linkedin: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://www.linkedin.com/oauth/v2/authorization',
          token: undefined,
          userInfo: 'https://www.googleapis.com/oauth2/v3/userinfo',
          logout: 'https://example.com/logout'
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 5184000
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
        responseType: 'code',
        grantType: 'code',
        accessType: undefined,
        redirectUri: process.env.LINKEDIN_CALLBACK_URL,
        logoutRedirectUri: undefined,
        clientId: process.env.LINKEDIN_CLIENT_ID,
        scope: ['r_liteprofile','r_emailaddress'],
        // state: 'UNIQUE_AND_NON_GUESSABLE',
        codeChallengeMethod: '',
        responseMode: '',
        acrValues: '',
      }
    },
  },
}
