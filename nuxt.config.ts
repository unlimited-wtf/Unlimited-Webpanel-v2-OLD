import { fileURLToPath } from 'url';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
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
    modules: ['magic-regexp/nuxt', '@nuxtjs/i18n', '@sidebase/nuxt-auth', 'nuxt-quasar-ui'],
    imports: {
        dirs: ['./stores']
    },
    alias: {
        '@': fileURLToPath(new URL('./', import.meta.url)),
        '@Database': fileURLToPath(new URL('./server/database', import.meta.url))
    },
    runtimeConfig: {
        accessToken: process.env.ACCESS_TOKEN,
        discordMasterId: process.env.DISCORD_MASTER_ID,
        mysqlConnectionString: process.env.MYSQL_CONNECTION_STRING,

        public: {
            siteTitle: process.env.SITE_TITLE,
            serverName: process.env.SERVER_NAME
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
    auth: {
        globalAppMiddleware: true
    }
});
