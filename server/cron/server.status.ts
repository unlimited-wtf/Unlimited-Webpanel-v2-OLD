import { defineCronHandler } from '#nuxt/cron';
import { useLogger } from '~/server/utils/useLogger';
import { GameServerStatus } from '~/shared/types/game';
import { io } from '../plugins/socket.io';

const { logDebugServerInfo } = useLogger();

type GameServerResponse = {
    clients: number;
    sv_maxclients: number;
};

const config = useRuntimeConfig();

export const ServerStatus: GameServerStatus = {
    status: 'offline',
    players: 0,
    maxPlayers: 32
};

// Check server status every minute
export default defineCronHandler(
    'everyMinute',
    async () => {
        logDebugServerInfo('Checking Server Status ...');

        try {
            // Check if server is online
            const data: GameServerResponse = await $fetch(`${config.apiBaseUrl}/dynamic.json`, {
                method: 'GET'
            });

            // Save old status to compare
            const tmpStatus = ServerStatus.status;

            // Update server status
            ServerStatus.status = 'online';
            ServerStatus.players = data.clients;
            ServerStatus.maxPlayers = Number(data.sv_maxclients);

            logDebugServerInfo(
                `Server Status: ${ServerStatus.status} - Players: ${ServerStatus.players} / ${ServerStatus.maxPlayers}`
            );

            // Update server status on clients if changed
            if (tmpStatus !== ServerStatus.status) {
                logDebugServerInfo('Server Status changed - Update Clients ...');

                // Emit server status to clients
                io.emit('update:server:status', ServerStatus);
            }
        } catch (error: any) {
            // Reset server status
            ServerStatus.status = 'offline';
            ServerStatus.players = 0;
            ServerStatus.maxPlayers = 32;

            logDebugServerInfo(`Server Status: ${ServerStatus.status}`);
        }
    },
    { runOnInit: true }
);
