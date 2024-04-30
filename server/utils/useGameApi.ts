import { createError, readBody, appendHeader, H3Event } from 'h3';

/**
 * Makes a request to the game API using the provided event and URL.
 * @param event - The event object containing the request details.
 * @param url - The URL to make the request to.
 * @returns A Promise that resolves to the response data from the API.
 * @throws An error if the `runtimeConfig.apiBaseUrl` configuration is missing or if there is an error making the request.
 */
export async function useGameApi (event: H3Event, url: string) {
    const config = useRuntimeConfig();

    if (!config.apiBaseUrl) {
        throw new Error('Missing `runtimeConfig.apiBaseUrl` configuration.');
    }

    const { method, headers } = event.node.req;
    const body = method !== 'GET' && method !== 'HEAD' ? await readBody(event) : undefined;

    try {
        const response = await $fetch.raw(url, {
            // @ts-ignore
            method,
            baseURL: `${config.apiBaseUrl}/unlimited-api`,
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': headers['content-length'],
                authorization: `${config.apiKey}`
            } as HeadersInit,
            body: { ...body }
        });

        for (const header of ['set-cookie', 'cache-control']) {
            if (response.headers.has(header)) {
                //@ts-ignore
                appendHeader(event, header, response.headers.get(header));
            }
        }

        return response._data;
    } catch (error: any) {
        return createError({
            statusCode: error.response.status,
            statusText: error.message
        });
    }
};
