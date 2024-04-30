import { defineStore } from 'pinia';
import type { GameServerStatus } from '~/shared/types/game';

export const useServerStore = defineStore('server', () => {
    const serverStatus = ref({
        online: false,
        players: 0,
        maxPlayers: 32
    });

    function updateServerStatus(data: GameServerStatus) {
        serverStatus.value.online = data.status == 'online';
        serverStatus.value.players = data.players;
        serverStatus.value.maxPlayers = data.maxPlayers;
    }

    return {
        serverStatus,
        updateServerStatus
    };
});
