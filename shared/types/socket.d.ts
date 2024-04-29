import 'socket.io';

declare module 'socket.io' {
    interface Socket {
        readonly handshake: Handshake & {
            query: {
                uid: string;
            };
        };

        data: {
            uid: string;
        };
    }
}
