const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'root12',
    port: 5432,
    max: 20,
});

const runQuery = async (query, params = []) => {
    const client = await pool.connect();
    try {
        return await client.query(query, params);
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = runQuery;