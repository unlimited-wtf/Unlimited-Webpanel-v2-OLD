import { Actions, Subjects } from '@/shared/permissions';

export type NavigationHeaderChild = {
    action: string;
    subject: string;
};

export interface NavigationHeader {
    header: string;
    children: NavigationHeaderChild[];
}

export interface NavigationGroup {
    title: string;
    icon: string;
    children: NavigationItem[];
}

export interface NavigationItem {
    title: string;
    action?: string;
    subject?: string;
    route: string;
    icon?: string;
}

export const useNavigation = () => {
    const { t } = useI18n();

    const navigation: (NavigationHeader | NavigationGroup | NavigationItem)[] = [
        // Defaults everyone can see
        {
            title: t('navigation.titles.dashboard'),
            route: 'ucp',
            icon: 'o_dashboard'
        },
        {
            title: t('navigation.titles.whitelist'),
            route: 'ucp-whitelist',
            icon: 'las la-id-card'
        },
        {
            title: t('navigation.titles.mycharacters'),
            route: 'ucp-characters',
            icon: 'las la-users'
        },

        // Support section
        {
            header: t('navigation.headers.support'),
            children: [
                {
                    action: Actions.Delete,
                    subject: Subjects.Test
                }
            ]
        },
        {
            title: t('navigation.titles.map'),
            action: Actions.Delete,
            subject: Subjects.Test,
            icon: 'o_location_on',
            children: [
                {
                    title: t('navigation.titles.livemap'),
                    action: Actions.Delete,
                    subject: Subjects.Test,
                    route: 'ucp-support-liveemap'
                },
                {
                    title: t('navigation.titles.waypoints'),
                    action: Actions.Delete,
                    subject: Subjects.Test,
                    route: 'ucp-support-waypoints'
                }
            ]
        },
        {
            title: t('navigation.titles.characters'),
            action: Actions.Delete,
            subject: Subjects.Test,
            icon: 'las la-walking',
            route: 'ucp-support-characters'
        },
        {
            title: t('navigation.titles.vehicles'),
            action: Actions.Delete,
            subject: Subjects.Test,
            icon: 'las la-car',
            route: 'ucp-support-vehicles'
        },
        {
            title: t('navigation.titles.stashes'),
            action: Actions.Delete,
            subject: Subjects.Test,
            icon: 'las la-archive',
            route: 'ucp-support-stashes'
        },
        {
            title: t('navigation.titles.logs'),
            action: Actions.Delete,
            subject: Subjects.Test,
            icon: 'las la-file',
            children: [
                {
                    title: t('navigation.titles.playerlogs'),
                    action: Actions.Delete,
                    subject: Subjects.Test,
                    route: 'ucp-support-logs-player'
                },
                {
                    title: t('navigation.titles.gamelogs'),
                    action: Actions.Delete,
                    subject: Subjects.Test,
                    route: 'ucp-support-logs-game'
                }
            ]
        },

        // Development section
        {
            header: t('navigation.headers.development'),
            children: [
                {
                    action: Actions.Delete,
                    subject: Subjects.Test
                }
            ]
        },

        // Administration section
        {
            header: t('navigation.headers.administration'),
            children: [
                {
                    action: Actions.Delete,
                    subject: Subjects.Test
                }
            ]
        },
        {
            title: t('navigation.titles.roles'),
            action: Actions.Delete,
            subject: Subjects.Test,
            route: 'ucp-administration-roles',
            icon: 'las la-theater-masks'
        },
    ];

    return {
        navigation
    };
};
