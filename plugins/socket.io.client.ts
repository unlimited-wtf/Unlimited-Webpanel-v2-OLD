import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(async (nuxtApp) => {
    const { io } = await import('socket.io-client');
    const socket = io({
        withCredentials: true,
        autoConnect: false
    });

    nuxtApp.provide('socket', socket);
});

declare module '#app' {
    interface NuxtApp {
        $socket: ReturnType<typeof import('socket.io-client')['io']>;
    }
}
