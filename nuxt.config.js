const pkg = require('./package')

module.exports = {
  mode: 'universal',
  /*   loading: '~/components/loading.vue', */
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width,  initial-scale=0.1, maximum-scale=1, user-scalable=1'
      },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        hid: 'og:Palmyra',
        name: 'og:Palmyra',
        content: 'Palmyra site description'
      }
    ],
    noscript: [{ innerHTML: 'This website requires JavaScript.' }],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css'
      }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
      },
      {
        src:
          'https://cdn.polyfill.io/v2/polyfill.min.js?features=default,fetch,Object.entries'
      },

      { src: '/js/jssor.slider.min.js' },
      { src: '/js/docs.js' },
      { src: '/js/customjs.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */

  /*
  ** Global CSS
  */
  css: [
    'bulma/css/bulma.css',
    /*     '~/css/foundation.css', */
    '~/css/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/aos', ssr: false },
    { src: '~plugins/vee-validate.js', ssr: true },
    { src: '~plugins/vue-cookie-law.js', ssr: false }
    /* { src: '~plugins/crisp.js', ssr: false } */
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/component-cache',
    ['bootstrap-vue/nuxt', { css: false }],
    '@nuxtjs/moment',
    [
      'nuxt-validate',
      {
        lang: 'en'
      }
    ]
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
/* export default {
  loading: '~/components/loading.vue'
} */
