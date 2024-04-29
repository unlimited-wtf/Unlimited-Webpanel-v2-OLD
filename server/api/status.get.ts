import { ServerStatus } from '../cron/server.status';

// Cache return the server status from the "cache" instead of the FiveM-Server
export default defineEventHandler(() => ServerStatus);
