// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "vue-sonner/nuxt", "@pinia/nuxt"],
  css: ["@/assets/main.css"],
  runtimeConfig: {
    public: {
      baseUrl: "http://localhost:5501",
      EMAILJS_SERVICE_ID: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      EMAILJS_PUBLIC_KEY: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    },
  },
  ssr: false,
  // devServer: {
  //   https: true,
  // },
});
