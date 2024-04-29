import { useGameApi } from '~/server/utils/useGameApi';

export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    return await useGameApi(event, `/license/${query.discordId}`);
});
