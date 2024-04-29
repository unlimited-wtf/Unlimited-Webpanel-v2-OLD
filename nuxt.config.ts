import { fileURLToPath } from 'url';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    nitro: { experimental: { websocket: true } },
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
                { name: 'page-topic', content: 'Webpanel, GTAV, FiveM' }
            ]
        }
    },
    modules: [
        'magic-regexp/nuxt',
        '@nuxtjs/i18n',
        '@sidebase/nuxt-auth',
        'nuxt-quasar-ui',
        '@fullpage/nuxt-fullpage',
        '@pinia/nuxt',
        'nuxt-cron'
    ],
    imports: {
        dirs: ['./stores']
    },
    alias: {
        '@': fileURLToPath(new URL('./', import.meta.url)),
        '@Database': fileURLToPath(new URL('./server/database', import.meta.url)),
        '@Server': fileURLToPath(new URL('./server', import.meta.url))
    },
    runtimeConfig: {
        isPreview: process.env.IS_PREVIEW,
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
            fontIcons: ['material-icons', 'material-icons-outlined', 'fontawesome-v6', 'mdi-v7', 'line-awesome']
        },
        sassVariables: 'assets/scss/template.scss'
    },
    i18n: {
        locales: [
            {
                code: 'en-GB',
                name: 'English',
                iso: 'en-GB',
                dir: 'ltr',
                file: 'en.json'
            }
        ],
        lazy: true,
        langDir: 'lang/',
        detectBrowserLanguage: false,
        defaultLocale: 'en-GB'
    },
    auth: {
        baseURL: process.env.AUTH_ORIGIN,
        globalAppMiddleware: true,
        session: {
            enableRefreshPeriodically: false,
            enableRefreshOnWindowFocus: false
        }
    }
});
