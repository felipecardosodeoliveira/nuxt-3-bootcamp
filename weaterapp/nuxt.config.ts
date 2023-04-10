// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
            WEATHER_APP_SECRET: process.env.SECRET_API_KEY,
        }
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ]
})
