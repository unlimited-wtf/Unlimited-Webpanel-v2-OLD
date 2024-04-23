import type { NitroApp } from 'nitropack';
import { Server as Engine } from 'engine.io';
import { Server, type ServerOptions } from 'socket.io';
import { defineEventHandler } from 'h3';

const options: Partial<ServerOptions> = {
    path: '/socket.io',
    serveClient: false
};

const engine = new Engine();
export const io = new Server();

export default defineNitroPlugin((nitroApp: NitroApp) => {
    io.bind(engine);
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
                engine.handleRequest(event.node.req, event.node.res);
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
