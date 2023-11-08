// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 7050,
  },
  pages: true,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  spaLoadingTemplate: true,
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    private: {
      dbConfig: {
        host: '127.0.0.1',
        port: 5432,
        database: 'geekbang_web',
        user: 'postgres',
        password: 'sasasa',
      },
    },
  },
  experimental: {
    componentIslands: true,
  },
})
