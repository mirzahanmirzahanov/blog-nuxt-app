// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  devtools: { enabled: true },
  components: [
    {
      pathPrefix: false,
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/scss/_variables.scss" as *;',
        },
      },
    },
  },
  css: ["~/assets/styles/scss/main.scss"],
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
});
