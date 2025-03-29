const UserRepository = require('../model/UserRepo');

const UserService = {
    addTransaction: async (user_id, category, transactionAmount) => {
        return await UserRepository.setTransaction(user_id, category , transactionAmount);
    },
    getTransactionById: async (user_id) => {
        return await UserRepository.getTransactionById(user_id);
    },
}

module.exports = UserService;