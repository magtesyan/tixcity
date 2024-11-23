// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  css: ["@/assets/scss/main.scss"],
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "nuxt-swiper",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/variables.scss";
            @import "@/assets/scss/mixins.scss";`,
        },
      },
    },
    build: {
      target: "esnext",
      minify: false,
    },
    server: {
      hmr: {
        overlay: false,
      },
    },
  },
  googleFonts: {
    download: false,

    fontsDir: "assets/fonts",
    base64: true,
    families: {
      Playfair: [400, 500, 600, 700, 800],
      Oswald: [400, 500, 600, 700],
    },
    display: "swap",
  },

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
