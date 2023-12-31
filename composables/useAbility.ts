import { ability } from '~/plugins/ability.client';

import type { NavigationItem } from '~/composables/useNavigation';

export const useAbility = () => {
    const { data } = useAuth();

    const can = (action: string, subject: string) => {
        return ability ? ability.can(action as any, subject as any) || (data.value as any).isMaster : false;
    };

    const canViewUcpNavMenuLink = (item: NavigationItem) => can(item.action, item.subject);

    const canViewUcpNavMenuGroup = (item: NavigationItem) => {
        const hasAnyVisibleChild = item.children?.some((i) => can(i.action, i.subject));

        if (!(item.action && item.subject)) {
            return hasAnyVisibleChild;
        }

        return can(item.action, item.subject) && hasAnyVisibleChild;
    };

    const canViewUcpNavMenuHeader = (item: NavigationItem) => {
        return item.children?.some((i) => can(i.action, i.subject));
    };

    return {
        can,
        canViewUcpNavMenuLink,
        canViewUcpNavMenuGroup,
        canViewUcpNavMenuHeader
    };
};
