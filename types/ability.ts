import type { ForcedSubject, MongoAbility } from '@casl/ability';
import { actions, subjects } from '~/shared/permissions';

export type Abilities = [
    (typeof actions)[number],
    (typeof subjects)[number] | ForcedSubject<Exclude<(typeof subjects)[number], 'all'>>
];

export type AppAbility = MongoAbility<Abilities>;
