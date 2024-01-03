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
            title: t('navigation.titles.characters'),
            route: 'ucp-characters',
            icon: 'las la-users'
        },
        {
            title: t('navigation.titles.tickets'),
            route: 'ucp-tickets',
            icon: 'las la-life-ring'
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
            title: t('navigation.titles.dashboard'),
            action: Actions.Delete,
            subject: Subjects.Test,
            icon: 'o_dashboard',
            route: 'acp-support-dashboard'
        },
        {
            title: t('navigation.titles.tickets'),
            action: Actions.Delete,
            subject: Subjects.Test,
            icon: 'las la-life-ring',
            route: 'acp-support-tickets'
        },
        {
            title: t('navigation.titles.whitelist'),
            icon: 'las la-id-card',
            children: [
                {
                    title: t('navigation.titles.applications'),
                    action: Actions.Delete,
                    subject: Subjects.Test,
                    route: 'acp-support-whitelist-applications'
                },
                {
                    title: t('navigation.titles.questions'),
                    action: Actions.Delete,
                    subject: Subjects.Test,
                    route: 'acp-support-whitelist-questions'
                }
            ]
        },
        {
            title: t('navigation.titles.map'),
            icon: 'o_location_on',
            children: [
                {
                    title: t('navigation.titles.livemap'),
                    action: Actions.Delete,
                    subject: Subjects.Test,
                    route: 'acp-support-map-livemap'
                },
                {
                    title: t('navigation.titles.waypoints'),
                    action: Actions.Delete,
                    subject: Subjects.Test,
                    route: 'acp-support-map-waypoints'
                }
            ]
        },
        {
            title: t('navigation.titles.characters'),
            action: Actions.Delete,
            subject: Subjects.Test,
            icon: 'las la-users',
            route: 'acp-support-characters'
        },
        {
            title: t('navigation.titles.vehicles'),
            action: Actions.Delete,
            subject: Subjects.Test,
            icon: 'las la-car',
            route: 'acp-support-vehicles'
        },
        {
            title: t('navigation.titles.stashes'),
            action: Actions.Delete,
            subject: Subjects.Test,
            icon: 'las la-boxes',
            route: 'acp-support-stashes'
        },
        {
            title: t('navigation.titles.logs'),
            icon: 'las la-file',
            children: [
                {
                    title: t('navigation.titles.playerlogs'),
                    action: Actions.Delete,
                    subject: Subjects.Test,
                    route: 'acp-support-logs-player'
                },
                {
                    title: t('navigation.titles.gamelogs'),
                    action: Actions.Delete,
                    subject: Subjects.Test,
                    route: 'acp-support-logs-game'
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
        {
            title: t('navigation.titles.core'),
            icon: 'las la-stream',
            children: [
                {
                    title: t('navigation.titles.items'),
                    action: Actions.Delete,
                    subject: Subjects.Test,
                    route: 'acp-development-core-items'
                },
                {
                    title: t('navigation.titles.jobs'),
                    action: Actions.Delete,
                    subject: Subjects.Test,
                    route: 'acp-development-core-jobs'
                },
                {
                    title: t('navigation.titles.gangs'),
                    action: Actions.Delete,
                    subject: Subjects.Test,
                    route: 'acp-development-core-gangs'
                }
            ]
        },
        {
            title: t('navigation.titles.triggers'),
            action: Actions.Delete,
            subject: Subjects.Test,
            route: 'acp-development-triggers',
            icon: 'las la-project-diagram'
        },
        {
            title: t('navigation.titles.doors'),
            action: Actions.Delete,
            subject: Subjects.Test,
            route: 'acp-development-doors',
            icon: 'las la-door-open'
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
            title: t('navigation.titles.users'),
            action: Actions.Delete,
            subject: Subjects.Test,
            route: 'acp-administration-users',
            icon: 'las la-user'
        },
        {
            title: t('navigation.titles.roles'),
            action: Actions.Delete,
            subject: Subjects.Test,
            route: 'acp-administration-roles',
            icon: 'las la-theater-masks'
        },
        {
            title: t('navigation.titles.configuration'),
            action: Actions.Delete,
            subject: Subjects.Test,
            route: 'acp-administration-configuration',
            icon: 'las la-cog'
        }
    ];

    return {
        navigation
    };
};
