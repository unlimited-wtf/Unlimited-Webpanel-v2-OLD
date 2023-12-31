import { createMongoAbility } from '@casl/ability';
import { abilitiesPlugin } from '@casl/vue';
import type { AppAbility } from '~/types/ability';

export const ability = createMongoAbility<AppAbility>([]);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(abilitiesPlugin, ability, {
        useGlobalProperties: true
    });
});
