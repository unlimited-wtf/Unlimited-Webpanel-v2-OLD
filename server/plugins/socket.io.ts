import type { NitroApp } from 'nitropack';
import { Server as Engine } from 'engine.io';
import { Server, type ServerOptions, Socket } from 'socket.io';
import { defineEventHandler } from 'h3';
import { IncomingMessage, ServerResponse } from 'http';
import { H3Event } from 'h3';
import { getServerSession } from '#auth';
import type { Session } from 'next-auth';
import { ServerStatus } from '../cron/server.status';

interface ExtendedIncomingMessage extends IncomingMessage {
    nitroEvent: H3Event | null;
    _query: {
        uid: string;
        sid: string;
    };
}

const options: Partial<ServerOptions> = {
    path: '/socket.io',
    serveClient: false
};

const engine = new Engine();
export const io = new Server();

export default defineNitroPlugin((nitroApp: NitroApp) => {
    io.bind(engine);

    // SocketIO Auth middleware
    io.engine.use(async (req: ExtendedIncomingMessage, res: ServerResponse, next: (err?: Error) => void) => {
        const isHandshake = req._query.sid === undefined;

        // Skip middleware if it's not a handshake
        if (!isHandshake) {
            return next();
        }

        // Check if nitroEvent is present
        if (!req.nitroEvent) {
            // Unauthorized
            return next(new Error('Unauthorized'));
        }

        // Check if the user is authenticated on handshake
        const session: Session | null = await getServerSession(req.nitroEvent);
        if (!session || !session.user) {
            // Unauthorized
            return next(new Error('Unauthorized'));
        }

        // Clean up
        req.nitroEvent = null;

        // Add the user discordId to the handshake query
        req._query.uid = session.uid;

        // Authorized
        next();
    });

    io.on('connection', async (socket: Socket) => {
        // Bind the users DiscordId to the socket
        socket.data.uid = socket.handshake.query.uid;

        // Inform the client of the server status
        socket.emit('update:server:status', ServerStatus);
    });

    nitroApp.router.use(
        '/socket.io/',
        defineEventHandler({
            handler(event) {
                // Add the Nitro event to the request object for getServerSession
                const req = event.node.req as ExtendedIncomingMessage;
                req.nitroEvent = event;

                engine.handleRequest(req, event.node.res);
                event._handled = true;
            },
            websocket: {
                open(peer: { ctx: { node: any } }) {
                    const nodeContext = peer.ctx.node;
                    const req = nodeContext.req;

                    // @ts-expect-error private method
                    engine.prepare(req);

                    const rawSocket = nodeContext.req.socket;
                    const websocket = nodeContext.ws;

                    // @ts-expect-error private method
                    engine.onWebSocket(req, rawSocket, websocket);
                }
            }
        })
    );
});
