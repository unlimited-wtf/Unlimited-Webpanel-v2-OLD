import { NavigationItem } from '@/types/navigation';

export const useNavigation = () => {
    const navigation: NavigationItem[] = [
        {
            title: 'Test',
            action: 'Action:Test',
            subject: 'Subject:Test'
        }
    ];

    const resolveVerticalNavMenuItemComponent = (item: NavigationItem) => {
        if (item.header) return 'vertical-nav-menu-header'
        if (item.children) return 'vertical-nav-menu-group'
        
        return 'vertical-nav-menu-link'
      }

    return {
        navigation,
        resolveVerticalNavMenuItemComponent
    };
};
