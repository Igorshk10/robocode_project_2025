const runQuery = require("./db");
const bcrypt = require('bcrypt');


const UserRepository = {
    createUser: async (username, password, email, monthlyBudget, date_of_registration) => {
        // const query = `INSERT INTO users (login, password) VALUES ($1, $2);`;
        // const values = [login, password]
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const query = await runQuery(`insert into users (username, password, email, monthlybudget, date_of_registration) values ($1, $2 , $3, $4, $5)   RETURNING *;`, [username, hashedPassword, email, monthlyBudget, date_of_registration]); ;
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
    setTransaction: async (user_id, category , transactionAmount, transaction_date) => {
        try {
            const query = await runQuery(`insert into userstransaction (user_id, category, transaction_amount, transaction_date) values ($1, $2, $3, $4) ;`, [user_id, category, transactionAmount, transaction_date]); ;
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
            const query = await runQuery(`SELECT category, SUM(transaction_amount) AS total_amount FROM userstransaction WHERE user_id = $1 GROUP BY category;`, [user_id]);
            return query.rows;
        } catch (err) {
            console.error('Error in getTransactionById:', err);
            throw err; 
        }
    },
    updateUsername: async ( newusername, user_id) => {
        try {
            const query = await runQuery(`UPDATE users SET username = $1 WHERE id = $2 RETURNING *;`, [newusername, user_id]);
            return query.rows[0];
        } catch (err) {
            console.error('Error update:', err);
            throw err;
        }
    } , 
    updateMonthlyBudget: async ( newMonthlyBudget, user_id) => {
        try {
            const query = await runQuery(`UPDATE users SET monthlybudget = $1 WHERE id = $2 RETURNING *;`, [newMonthlyBudget, user_id]);
            return query.rows[0];
        } catch (err) {
            console.error('Error update:', err);
            throw err;
        }
    },
    getAllCategory: async () => {
        try{
            const query = await runQuery(`SELECT categoryName FROM categories;`);
            return query.rows;
        } catch (err) {
            console.error('Error in getAllCategory:', err);
            throw err; 
        }
    },
    getHistoryOfTransaction: async (user_id) => {
        try{
       // const query = await runQuery(`select transaction_date ,category, transaction_amount from userstransaction where user_id = $1;`, [user_id]);
        const query = await runQuery(`SELECT userstransaction.transaction_date, userstransaction.category, userstransaction.transaction_amount , categories.img_url
            FROM userstransaction
            INNER JOIN categories ON userstransaction.category = categories.categoryname
            inner join users on userstransaction.user_id = users.id
            where users.id = $1;` , [user_id]);
            return query.rows;
        }catch (err) {
            console.error('Error in getHistoryOfTransaction:', err);
            throw err; 

        }
    }
}



module.exports = UserRepository;