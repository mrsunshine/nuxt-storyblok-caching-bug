// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'YOUR PUBLIC ACCESS TOKEN',
        apiOptions: {
          region: 'eu', // optional, default: 'eu',
          // Dirty workaround hack, disable caching
          /*
          cache: {
            type: "none",
          },
          */
        },
      },
    ],
  ],
});
