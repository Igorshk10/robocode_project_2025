const UserRepository = require('../model/UserRepo');

const UserService = {
    addTransaction: async (user_id, category, transactionAmount) => {
        return await UserRepository.setTransaction(user_id, category , transactionAmount);
    },
}

module.exports = UserService;