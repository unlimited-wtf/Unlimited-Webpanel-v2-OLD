import { Subjects, Actions } from '~/shared/permissions';
import type { Session } from 'next-auth';
import MYSQL from '../db';

export const usePermissions = () => {
    const getPermissions = async (discordId: string) => {
        const data: { permissions: Array<{ subject: Subjects; action: Actions }> }[] = await MYSQL.query(
            `SELECT permissions FROM unl_roles, unl_user_roles, unl_users WHERE unl_users.discordId = ? AND unl_roles.id = unl_user_roles.roleId`,
            [discordId]
        );

        return data[0] ? JSON.parse(data[0]?.permissions as unknown as string) : [];
    };

    const checkPermission = async (session: Session, subject: Subjects, action: Actions) => {
        return session.permissions.some((permission) => permission.subject === subject && permission.action === action);
    };

    return { getPermissions, checkPermission };
};
