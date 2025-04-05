require('dotenv').config('../.env');
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    max: process.env.DATABASE_MAX,
     ssl: {
        rejectUnauthorized: false,
        ca: process.env.DATABASE_SSL,
    },  
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