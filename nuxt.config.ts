import { fileURLToPath } from 'url';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            charset: 'utf-16',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { name: 'Content-Language', content: 'en' },
                { name: 'revisit-after', content: '10 days' },
                { name: 'robots', content: 'follow' },
                { name: 'robots', content: 'index' },
                { name: 'page-topic', content: 'Webpanel, GTAV, FiveM' },

                // og
                { hid: 'og-type', property: 'og:type', content: 'website' },
                {
                    hid: 'og-title',
                    property: 'og:title',
                    content: 'Unlimited v2 - Preview'
                },
                {
                    hid: 'og-desc',
                    property: 'og:description',
                    content: 'Checkout the current state of v2. This page will be updated frequently.'
                },
                {
                    hid: 'og-image',
                    property: 'og:image',
                    content: 'https://preview.unlimited.wtf/logo.png'
                },
                {
                    hid: 'og-url',
                    property: 'og:url',
                    content: 'https://preview.unlimited.wtf'
                }
            ]
        }
    },
    modules: ['magic-regexp/nuxt', '@nuxtjs/i18n', '@sidebase/nuxt-auth', 'nuxt-quasar-ui', '@fullpage/nuxt-fullpage'],
    imports: {
        dirs: ['./stores']
    },
    alias: {
        '@': fileURLToPath(new URL('./', import.meta.url)),
        '@Database': fileURLToPath(new URL('./server/database', import.meta.url)),
        '@Server': fileURLToPath(new URL('./server', import.meta.url))
    },
    runtimeConfig: {
        apiBaseUrl: process.env.API_BASE_URL,
        accessToken: process.env.ACCESS_TOKEN,
        discordMasterId: process.env.DISCORD_MASTER_ID,
        mysqlConnectionString: process.env.MYSQL_CONNECTION_STRING,

        public: {
            siteTitle: process.env.SITE_TITLE,
            serverName: process.env.SERVER_NAME,
            discordUrl: process.env.DISCORD_URL,
            discordInvCode: process.env.DISCORD_INV_CODE,
            fivemJoinUrl: process.env.FIVEM_JOIN_URL
        }
    },
    quasar: {
        plugins: ['Notify', 'Dialog'],
        extras: {
            fontIcons: ['material-icons', 'material-icons-outlined', 'fontawesome-v6']
        },
        sassVariables: 'assets/scss/template.scss'
    },
    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en.js',
                name: 'English'
            }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en'
    },
    auth: { baseURL: process.env.AUTH_ORIGIN, globalAppMiddleware: true }
});
