import { ability } from '~/plugins/ability.client';

import type { NavigationGroup, NavigationHeader, NavigationItem } from '~/composables/useNavigation';

export const useAbility = () => {
    const { data } = useAuth();

    const can = (action: string, subject: string) => {
        if (!action && !subject) return true;

        return ability ? ability.can(action as any, subject as any) || (data.value as any).isMaster : false;
    };

    const canViewNavMenuLink = (item: NavigationItem) => can(item.action ?? '', item.subject ?? '');

    const canViewNavMenuGroup = (item: NavigationGroup) => {
        return item.children?.some((i) => can(i.action ?? '', i.subject ?? ''));
    };

    const canViewNavMenuHeader = (item: NavigationHeader) => {
        return item.children?.some((i) => can(i.action ?? '', i.subject ?? ''));
    };

    return {
        can,
        canViewNavMenuLink,
        canViewNavMenuGroup,
        canViewNavMenuHeader
    };
};
