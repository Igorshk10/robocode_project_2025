const UserRepository = require('../model/UserRepo');
const bcrypt = require('bcrypt');

const UserService = {
    addTransaction: async (user_id, category, transactionAmount, transaction_date) => {
        return await UserRepository.setTransaction(user_id, category , transactionAmount, transaction_date);
    },
    getTransactionById: async (userId , formatDate) => {
        return await UserRepository.getTransactionById(userId , formatDate);
    },
    updateUsername: async (newusername , password , userId) => {
        if (!newusername || !password) {
            throw new Error("Username or password must be non empty");
        }
        const user = await UserRepository.getUserById(userId);
        if (!user) {
            throw new Error("User not found");
        }    
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid credentials");
        }
        return await UserRepository.updateUsername( newusername, userId);
    },
    getAllCategory: async () => {
        return await UserRepository.getAllCategory();
    }, 
    updateMonthlyBudget: async (  newMonthlyBudget , password , userId) => {
        if (!newMonthlyBudget || !password) {
            throw new Error("Monthly budget or password must be non empty");
        }
        const user = await UserRepository.getUserById(userId);
        if (!user) {
            throw new Error("User not found");
        }    
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid credentials");
        }
        return await UserRepository.updateMonthlyBudget( newMonthlyBudget, userId);
    },
    getHistoryOfTransaction: async (userId, formatDate) => {
        return await UserRepository.getHistoryOfTransaction(userId,formatDate );
    },
}

module.exports = UserService;