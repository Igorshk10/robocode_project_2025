const UserRepository = require('../model/UserRepo');
const bcrypt = require('bcrypt');

const UserService = {
    addTransaction: async (user_id, category, transactionAmount, transaction_date) => {
        return await UserRepository.setTransaction(user_id, category , transactionAmount, transaction_date);
    },
    getTransactionById: async (user_id) => {
        return await UserRepository.getTransactionById(user_id);
    },
    updateUsername: async (  newusername , password , user_id) => {
        if (!newusername || !password) {
            throw new Error("Username or password must be non empty");
        }
        const user = await UserRepository.getUserById(user_id);
        if (!user) {
            throw new Error("User not found");
        }    
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid credentials");
        }
        return await UserRepository.updateUsername( newusername, user_id);
    },
    getAllCategory: async () => {
        return await UserRepository.getAllCategory();
    }, 
    updateMonthlyBudget: async (  newMonthlyBudget , password , user_id) => {
        if (!newMonthlyBudget || !password) {
            throw new Error("Monthly budget or password must be non empty");
        }
        const user = await UserRepository.getUserById(user_id);
        if (!user) {
            throw new Error("User not found");
        }    
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid credentials");
        }
        return await UserRepository.updateMonthlyBudget( newMonthlyBudget, user_id);
    },
    getHistoryOfTransaction: async (user_id) => {
        return await UserRepository.getHistoryOfTransaction(user_id);
    },
}

module.exports = UserService;