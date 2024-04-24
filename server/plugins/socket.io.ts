import type { NitroApp } from 'nitropack';
import { Server as Engine } from 'engine.io';
import { Server, type ServerOptions } from 'socket.io';
import { defineEventHandler } from 'h3';
import { IncomingMessage, ServerResponse } from 'http';
import { H3Event } from 'h3';
import { getServerSession } from '#auth';
import { UserSession } from '../api/auth/[...]';

interface ExtendedIncomingMessage extends IncomingMessage {
    nitroEvent: H3Event;
    _query: { sid: string };
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

        // Skip if it's not a handshake
        if (!isHandshake) {
            return next();
        }

        // Check if the user is authenticated on the handshake
        const session: UserSession | null = await getServerSession(req.nitroEvent)
        if (!session || !session.user) {
            // Unauthorized
            return next(new Error('Unauthorized'));
        }

        // Authorized
        next();
    });

    io.on('connection', async (socket) => {
        console.log('A user connected');

        socket.on('disconnect', () => {
            console.log('A user disconnected');
        });
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
