// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-12-28',
  devtools: { enabled: true },
  css : ['~/assets/style.css','swiper/swiper-bundle.css'],
  ssr: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules : [
    
    '@nuxt/image'
    
  ],
})