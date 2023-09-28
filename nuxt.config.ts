// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'FirdausNG Blog',
            bodyAttrs: {
                class: ''
            }
        }
    },
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
    ],
    colorMode: {
        classSuffix: ''
    },
    content: {
    },
    devtools: { enabled: true }
})