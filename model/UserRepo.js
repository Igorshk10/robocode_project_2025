const runQuery = require("./db");
const bcrypt = require('bcrypt');


const UserRepository = {
    createUser: async (username, password, email, monthlyBudget) => {
        // const query = `INSERT INTO users (login, password) VALUES ($1, $2);`;
        // const values = [login, password]
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const query = await runQuery(`insert into users (username, password, email, monthlyBudget) values ($1, $2 , $3, $4)   RETURNING *;`, [username, hashedPassword, email, monthlyBudget]); ;
            return query.rows[0];
        } catch (err) {
        }
    },
    
    getUserByUsernameAndPassword: async (username, password) => {
        try {
            const query = await runQuery(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`);
            return query.rows[0];
        } catch (err) {
        }
    },
    
    //В setTransaction треба передати ще й user_id
    setTransaction: async (user_id, category , transactionAmount) => {
        try {
            const query = await runQuery(`insert into usersTransaction (user_id, category, transaction_amount) values ($1, $2, $3) ;`, [user_id, category, transactionAmount]); ;
            return query.rows[0];
        } catch (err) {
        }
    }, 
    getUserByUsername: async (username) => {
        try {
            const result = await runQuery(`SELECT * FROM users WHERE username = $1` , [username]);
            return result.rows[0];
        } catch (error) {
            console.error('Error getting user by username:', error);
            throw error;
        }
    },
    getUserById: async (user_id) => {
        try {
            const result = await runQuery(`SELECT * FROM users WHERE id = $1` , [user_id]);
            return result.rows[0];
        } catch (error) {
            console.error('Error getting user by ID:', error);
            throw error;
        }
    },
    getTransactionById: async (user_id) => {
        try {
            const query = await runQuery(`SELECT category, SUM(transaction_amount) AS total_amount FROM usersTransaction WHERE user_id = $1 GROUP BY category;`, [user_id]);
            return query.rows;
        } catch (err) {
            console.error('Error in getTransactionById:', err);
            throw err; 
        }
    },
    updateUsername: async ( newusername, user_id) => {
        try {
            const query = await runQuery(`UPDATE users SET username = $1 WHERE id = $2 RETURNING *;`, [newusername, user_id]);
            console.log('Query result:', query);
            return query.rows[0];
        } catch (err) {
            console.error('Error update:', err);
            throw err;
        }
    } 
}



module.exports = UserRepository;