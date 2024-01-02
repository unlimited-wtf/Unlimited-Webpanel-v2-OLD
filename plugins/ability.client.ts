import { createMongoAbility } from '@casl/ability';
import { abilitiesPlugin } from '@casl/vue';
import { Actions, Subjects } from '~/shared/permissions';

import type { ForcedSubject, MongoAbility } from '@casl/ability';

export type Abilities = [
    keyof typeof Actions,
    keyof typeof Subjects | ForcedSubject<Exclude<keyof typeof Subjects, 'all'>>
];

export type AppAbility = MongoAbility<Abilities>;

export const ability = createMongoAbility<AppAbility>([]);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(abilitiesPlugin, ability, {
        useGlobalProperties: true
    });
});
