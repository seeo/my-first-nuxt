import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  generate: {
    fallback: true // if you want to use '404.html' instead of the default '200.html'
    // fallback: 'my-fallback/file.html' // if your hosting needs a custom location
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['~/assets/style/app.styl'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/axios'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/auth',
    '@nuxtjs/axios', // Doc: https://github.com/nuxt-community/axios-module#usage
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */

  axios: {
    baseURL: 'http://localhost:3000'
  },

  vuetify: {
    theme: {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  auth: {
    redirect: {
      // login: '/login', // page to redirect to on auth failure, default is /login
      // logout: '/', // page to redirect to on auth failure, default is /
      home: false
    },
    strategies: {
      local: {
        endpoints: {
          logout: { url: '/api/auth/logout', method: 'get' },
          // user: false // { url: 'http://127.0.0.1:3000/api/auth/user', method: 'get', propertyName: false }
          login: { url: '/api/auth/login', method: 'post', propertyName: 'token' }, // not used...
          user: { url: '/api/auth/me', method: 'get', propertyName: 'user' } // not user...
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    }
  },
}
