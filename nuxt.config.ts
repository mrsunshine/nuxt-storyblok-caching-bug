// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'M77EfG1Jp9GmIIcCwu4Zlgtt',
        apiOptions: {
          region: 'eu', // optional, default: 'eu'
        },
      },
    ],
  ],
});
