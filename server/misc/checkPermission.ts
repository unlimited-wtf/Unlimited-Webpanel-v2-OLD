import { Actions, Subjects } from '~/shared/permissions';
import MYSQL from '../db';

export const checkPermission = async (
    discordId: string,
    action: Actions,
    subject: Subjects
): Promise<boolean> => {
    const results: any[] = await MYSQL.query(
        `SELECT 1 AS 'can' FROM unl_user_roles, unl_role_permissions, unl_permissions WHERE unl_user_roles.discordId = ? AND unl_role_permissions.roleId = unl_user_roles.roleId AND unl_permissions.action = ? AND unl_permissions.subject = ? LIMIT 1`,
        [discordId, action, subject]
    );

    return results.length > 0;
};
