export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event);

    // toDo: Fetch dynamic data from nuxt and not game server
    return await $fetch(`${config.apiBaseUrl}/dynamic.json`, {
        method: 'GET'
    });
});
