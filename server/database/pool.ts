import { createPool, Pool } from 'mysql2/promise';
import { logServerError, logServerInfo } from '@/server/utils/log';

function getDatabasePool(): Pool {
    try {
        const config = useRuntimeConfig();

        const dbPool = createPool({
            connectTimeout: 60000,
            uri: config.mysqlConnectionString
        });

        logServerInfo(`Database successfully connected`);

        return dbPool;
    } catch (error: any) {
        logServerError(error.message, `Could not create MYSQL Connection`);
        process.exit(1);
    }
}

export const dbPool = getDatabasePool();
