import type { NavigationItem } from '@/types/navigation';

export const useNavigation = () => {
    const navigation: NavigationItem[] = [
        {
            title: 'test',
            action: 'delete',
            subject: 'subject:test'
        }
    ];

    return {
        navigation
    };
};
