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
  experimental: {
    componentIslands: true,
  },
})
