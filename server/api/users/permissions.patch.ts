import MYSQL from '~/server/db';
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

    await MYSQL.query(`UPDATE unl_roles SET permissions = ? WHERE id = ?`, [permissions, roleId]);

    setResponseStatus(event, 202);
});
