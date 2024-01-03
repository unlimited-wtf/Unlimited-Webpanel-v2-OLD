import type {RouteLocationMatched} from 'vue-router';
import type { NavigationGroup, NavigationHeader, NavigationItem } from '~/composables/useNavigation';

import { LayoutVerticalNavMenuGroup, LayoutVerticalNavMenuHeader, LayoutVerticalNavMenuLink } from '#components';

export const useUtils = () => {
    const resolveNavMenuItemComponent = (item: NavigationHeader | NavigationGroup | NavigationItem) => {
        if ('header' in item && item.header) return LayoutVerticalNavMenuHeader;
        if ('children' in item && item.children) return LayoutVerticalNavMenuGroup;
    
        return LayoutVerticalNavMenuLink;
    };

    const routePathToName = (path: string): string => {
        let name = path.startsWith('/') ? path.substring(1) : path;
        name = name.replace(/\//g, '-');

        return name;
    }

    const pathIncludesRoute = (routes: RouteLocationMatched[], route: string | undefined): boolean => {
        return routes.some((r) => routePathToName(r.path) === route);
    }

    return {
        resolveNavMenuItemComponent,
        routePathToName,
        pathIncludesRoute
    };
}