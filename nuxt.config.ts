// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss"],
  pages: true,
  components: [
    {
      path: "components",
      pathPrefix: false,
    },
  ],
});
