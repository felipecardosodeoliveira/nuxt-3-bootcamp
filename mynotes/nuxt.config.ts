// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiURL: process.env.SUPABASE_URL,
            apiKey: process.env.SUPABASE_KEY
        }
    },
        
    modules: [
        "@nuxt/ui",
        "@nuxtjs/supabase"
    ]    
})
