const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'root12',
    port: 5432,
    max: 20,
});

module.exports = pool;