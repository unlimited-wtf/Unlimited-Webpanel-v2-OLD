import type { EventHandler, EventHandlerRequest } from 'h3';
import { getServerSession } from '#auth';
import type { Session } from 'next-auth';
import { Subjects, Actions } from '~/shared/permissions';
import { usePermissions } from './usePermissions';

const { hasPermission } = usePermissions();

export const defineProtectedEventHandler = <T extends EventHandlerRequest, D>(
    subject: Subjects,
    action: Actions,
    handler: EventHandler<T, D>
): EventHandler<T, D> =>
    defineEventHandler<T>(async (event) => {
        try {
            // Is the user authenticated?
            const session: Session | null = await getServerSession(event);
            if (!session) {
                return createError({
                    statusCode: 401,
                    statusMessage: 'Unauthorized'
                });
            }

            // Get the user's permissions
            const storage = useStorage('permissions');
            const permissions =
                (await storage.getItem<Array<{ subject: Subjects; action: Actions }>>(session.uid)) || [];

            // Check permissions
            const allowed = hasPermission(permissions, subject, action);
            if (!allowed && !session.isMaster) {
                return createError({
                    statusCode: 403,
                    statusMessage: 'Forbidden'
                });
            }

            return await handler(event);
        } catch (err: unknown) {
            // Error handling
            return createError({
                statusCode: 500,
                statusMessage: 'Internal Server Error',
                message: (err as Error).message
            });
        }
    });
