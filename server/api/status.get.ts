import { ServerStatus } from '../cron/server.status';

// Cache the server status for 1 minute and return it from the "cache" instead of the FiveM-Server
export default defineCachedEventHandler(
    () => {
        return ServerStatus;
    },
    { maxAge: 60 /* 1 minute */ }
);
