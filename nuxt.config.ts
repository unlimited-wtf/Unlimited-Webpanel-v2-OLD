// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "magic-regexp/nuxt",
    "@nuxtjs/i18n",
    "@sidebase/nuxt-auth",
    "nuxt-quasar-ui"
  ],
  quasar: {},
  i18n: {
    locales: [
      {
        code: "en",
        file: "en.js",
        name: "English"
      }
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "en"
  }
});
