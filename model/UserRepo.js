const pool = require("./db");

async function createUser(username, password, email, monthlyBudget) {
    let query = `insert into users (username, password, email, monthlyBudget) values ('${username}', '${password}' , '${email}',  '${monthlyBudget}');`;
    // const query = `INSERT INTO users (login, password) VALUES ($1, $2);`;
    // const values = [login, password];

    const client = await pool.connect();
    try {
        return await client.query(query);
    } catch (err) {
    } finally {
        client.release();
    }
}

async function authUser(login, password) {
    let query = `SELECT * FROM users WHERE login = '${login}' AND password = '${password}';`;

    const client = await pool.connect();
    try {
        return (await client.query(query)).rows[0];
    } catch (err) {
    } finally {
        client.release();
    }
}

module.exports = { createUser, authUser };