import { getServerSession } from '#auth';
import type { Session } from 'next-auth';
import { usePermissions } from '~/server/utils/usePermissions';

const { getPermissions } = usePermissions();

export default defineEventHandler(async (event) => {
    const session: Session | null = await getServerSession(event);

    if (!session) return [];

    const discordId = session.uid;
    const permissions = await getPermissions(discordId);

    return permissions;
});
