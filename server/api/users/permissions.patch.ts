import MYSQL from '~/server/db';
import { io } from '~/server/plugins/socket.io';
import { Actions, Subjects } from '~/shared/permissions';

export default defineProtectedEventHandler(Subjects.Roles, Actions.Update, async (event) => {
    const body = await readBody(event);
    const { roleId } = getQuery(event);

    if (!roleId || !body) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Bad Request',
            message: 'Missing roleId or permissions in body'
        });
    }

    const permissions = body.permissions;
    
    // Update the role's permissions in the database
    await MYSQL.query(`UPDATE unl_roles SET permissions = ? WHERE id = ?`, [permissions, roleId]);

    // Get all users with the role
    const roleUsers: Array<{ discordId: string }> = await MYSQL.query(
        `SELECT discordId FROM unl_user_roles WHERE roleId = ?`,
        [roleId]
    );
    const roleUserArray = roleUsers.map((user) => user.discordId);

    // Update logged in users with the role
    const userSockets = await io.fetchSockets();
    for (const userSocket of userSockets) {
        const userDiscordId = userSocket.data.uid;

        if (roleUserArray.includes(userDiscordId)) {
            io.to(userSocket.id).emit('update:user:permissions', permissions);
            useStorage('permissions').setItem(userDiscordId, permissions);
        }
    }

    setResponseStatus(event, 202);
});
