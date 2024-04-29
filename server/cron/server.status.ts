import { defineCronHandler } from '#nuxt/cron';
import { useLogger } from '~/server/utils/useLogger';
import { GameServerStatus } from '~/shared/types/game';

const { logServerInfo } = useLogger();

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
        logServerInfo('Checking Server Status ...');

        try {
            // Check if server is online
            const data: GameServerResponse = await $fetch(`${config.apiBaseUrl}/dynamic.json`, {
                method: 'GET'
            });

            // Update server status
            ServerStatus.status = 'online';
            ServerStatus.players = data.clients;
            ServerStatus.maxPlayers = Number(data.sv_maxclients);

            logServerInfo(`Server Status: ${ServerStatus.status} - Players: ${ServerStatus.players} / ${ServerStatus.maxPlayers}`);
        } catch (error: any) {
            // Reset server status
            ServerStatus.status = 'offline';
            ServerStatus.players = 0;
            ServerStatus.maxPlayers = 32;

            logServerInfo(`Server Status: ${ServerStatus.status}`);
        }
    },
    { runOnInit: true }
);
