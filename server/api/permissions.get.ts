import MYSQL from '../database';
import { getServerSession } from '#auth';
import { ServerSession } from '~/types/session';

export default defineEventHandler(async (event) => {
    // toDo: Funktion sicherer machen und Defaults zurückgeben

    const session = (await getServerSession(event)) as ServerSession | null;

    if (!session) return [];

    const discordId = session.uid;

    const permissions: any[] = await MYSQL.query(
        `SELECT action, subject FROM unl_user_roles, unl_role_permissions, unl_permissions WHERE unl_user_roles.discordId = ? AND unl_role_permissions.roleId = unl_user_roles.roleId`,
        [discordId]
    );

    return permissions;
});
