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
    download: false,

    fontsDir: "assets/fonts",
    base64: true,
    families: {
      "Old Standart TT": [400, 500, 600, 700, 800],
      Oswald: [400, 500, 600, 700],
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
