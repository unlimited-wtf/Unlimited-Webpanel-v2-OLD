import MYSQL from '../database';
import { getServerSession } from '#auth';
import { UserSession } from './auth/[...]';

export default defineEventHandler(async (event) => {
    // toDo: Funktion sicherer machen und Defaults zurückgeben

    const session = (await getServerSession(event)) as UserSession | null;

    if (!session) return [];

    const discordId = session.uid;

    const permissions: any[] = await MYSQL.query(
        `SELECT action, subject FROM unl_user_roles, unl_role_permissions, unl_permissions WHERE unl_user_roles.discordId = ? AND unl_role_permissions.roleId = unl_user_roles.roleId`,
        [discordId]
    );

    return permissions;
});
