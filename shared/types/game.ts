export type GameServerStatus = {
    status: 'online' | 'offline';
    players: number;
    maxPlayers: number;
};