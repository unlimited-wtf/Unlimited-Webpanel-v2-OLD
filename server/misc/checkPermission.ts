import { actions, subjects } from '~/shared/permissions';
import MYSQL from '../database';

export const checkPermission = async (
    discordId: string,
    action: typeof actions,
    subject: typeof subjects
): Promise<boolean> => {
    const results: any[] = await MYSQL.query(
        `SELECT 1 AS 'can' FROM unl_user_roles, unl_role_permissions, unl_permissions WHERE unl_user_roles.discordId = ? AND unl_role_permissions.roleId = unl_user_roles.roleId AND unl_permissions.action = ? AND unl_permissions.subject = ? LIMIT 1`,
        [discordId, action, subject]
    );

    return results.length > 0;
};
