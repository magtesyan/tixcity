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
  googleFonts: {
    fontsDir: "assets/fonts",
    families: {
      "Roboto Condensed": [300, 400, 500, 600, 700],
      "Playfair Display": [400, 500, 600, 700, 800],
    },
    display: "swap",
  },
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "nuxt-swiper", "@nuxtjs/google-fonts"],
  swiper: {
    styleLang: "scss",
  },
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
