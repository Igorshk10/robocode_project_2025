const pool = require("./db");

async function createUser(username, password, email, monthlyBudget) {
    let query = `insert into users (username, password, email, monthlyBudget) values ('${username}', '${password}' , '${email}',  '${monthlyBudget}')   RETURNING username;`;
    // const query = `INSERT INTO users (login, password) VALUES ($1, $2);`;
    // const values = [login, password];

    const client = await pool.connect();
    try {
        return (await client.query(query)).rows[0];
    } catch (err) {
    } finally {
        client.release();
    }
}

async function authUser(username, password) {
    let query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`;

    const client = await pool.connect();
    try {
        return (await client.query(query)).rows[0];
    } catch (err) {
    } finally {
        client.release();
    }
}

async function setTransaction(category , transactionAmount) {
    let query = `insert into usersTransaction (category, transaction_amount) values ('${category}', '${transactionAmount}') ;`;
    // const query = `INSERT INTO users (login, password) VALUES ($1, $2);`;
    // const values = [login, password];

    const client = await pool.connect();
    try {
        return (await client.query(query)).rows[0];
    } catch (err) {
    } finally {
        client.release();
    }
}

module.exports = { createUser, authUser, setTransaction };