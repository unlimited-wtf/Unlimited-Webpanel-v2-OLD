import { createError, readBody, appendHeader, H3Event } from 'h3';

export default async (event: H3Event, url: string) => {
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
                authorization: `${config.accessToken}`
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
