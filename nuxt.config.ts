export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/sass/_default.scss', 'primevue/resources/themes/mdc-dark-deeppurple/theme.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/sass/_colors.scss" as *;'
        }
      }
    }
  },
  modules: [
    'nuxt-icon', 
    'nuxt-swiper', 
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@hypernym/nuxt-anime', 
    'nuxt-primevue',
    '@nuxtjs/tailwindcss',
  ],
  primevue: {
    usePrimeVue: true,
    unstyled: true,
    ripple: true,
    inputStyle: 'filled',
    components: {
      include: '*',
    },
  },
})
