export type NavigationHeaderChild = {
    action: string;
    subject: string;
};

export interface NavigationItem {
    title: string;
    action: string;
    subject: string;
    header?: string;
    icon?: string;
    route?: string;
    children?: NavigationHeaderChild[];
}

export const useNavigation = () => {
    const navigation: NavigationItem[] = [
        {
            title: 'test',
            action: 'delete',
            subject: 'subject:test',
            route: 'ucp___en',
        }
    ];

    return {
        navigation
    };
};
