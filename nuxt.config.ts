// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            charset: 'utf-16',
            title: 'Unlimited - Webpanel',
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
    runtimeConfig: {},
    quasar: {
        plugins: ['Notify', 'Dialog'],
        extras: {
            fontIcons: ['material-icons', 'material-icons-outlined', 'fontawesome-v6']
        },
        sassVariables: 'assets/styles/quasar-variables.sass'
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
