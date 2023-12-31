import { createMongoAbility } from '@casl/ability';
import { abilitiesPlugin } from '@casl/vue';
import { actions, subjects } from '~/shared/permissions';

import type { ForcedSubject, MongoAbility } from '@casl/ability';

export type Abilities = [
    (typeof actions)[number],
    (typeof subjects)[number] | ForcedSubject<Exclude<(typeof subjects)[number], 'all'>>
];

export type AppAbility = MongoAbility<Abilities>;

export const ability = createMongoAbility<AppAbility>([]);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(abilitiesPlugin, ability, {
        useGlobalProperties: true
    });
});
