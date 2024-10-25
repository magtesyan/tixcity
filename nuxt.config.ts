// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/main.scss" as *;',
        },
      },
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "nuxt-swiper"],
  eslint: {
    // config: {
    //   stylistic: true,
    // },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
