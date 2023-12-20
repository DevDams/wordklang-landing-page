// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  colorMode: {
    preference: "light",
  },
  modules: ['@nuxt/ui'],
  css: ["~/assets/css/main.css"],
})
