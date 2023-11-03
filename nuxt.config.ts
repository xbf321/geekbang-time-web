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
  // 所有页面都生效，优先级最低
  css: ['~/assets/css/global.scss'],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    private: {
      dbConfig: {
        host: '127.0.0.1',
        port: 5432,
        database: 'geekbang_web_data',
        user: 'postgres',
        password: 'sasasa',
      },
    },
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
      OTHER_VARIABLE: `${process.env.NUXT_PUBLIC_SOME_VARIABLE}/other`,
    }
  },
  // 组件目录使用 XX.server.ts 标识，必须启用 componentIslands 选项
  experimental: {
    componentIslands: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;'
        }
      }
    },
  },
})
