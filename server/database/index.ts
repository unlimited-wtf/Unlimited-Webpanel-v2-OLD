import { dbPool } from './pool';

class _MYSQL {
    public async query<T = unknown>(query: string, fields?: any[]): Promise<T> {
        const [data] = await dbPool.execute(query, fields);

        return <T>data;
    }
}

const MYSQL = new _MYSQL();

export default MYSQL;
