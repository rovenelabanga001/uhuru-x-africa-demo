// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "vue-sonner/nuxt"],
  css: ["@/assets/main.css"],
  runtimeConfig: {
    public: {
      baseUrl: "http://localhost:5501",
    },
  },
  // devServer: {
  //   https: true,
  // },
});
