const UserRepository = require('../model/UserRepo');
const bcrypt = require('bcrypt');

const authService = {
    createUser: async (username, password, email, monthlyBudget, date_of_registration) => {
        let user = await UserRepository.getUserByUsername(username);
        if (!user) {
            return await UserRepository.createUser(username, password, email, monthlyBudget, date_of_registration);
        } else {
            throw new Error("Username already taken");
        }
    },
    auth: async (req, username, password, email , monthlyBudget, date_of_registration) => {
        const user = await UserRepository.getUserByUsername(username);
        if (!user) {
            throw new Error("User not found");
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid credentials");
        }
        req.session.user = {id: user.id, username: user.username, monthlyBudget: user.monthlybudget, date_of_registration: user.date_of_registration};

        return {message: "Login successful"};
    },
    logout: async (req) => {

    }
};

module.exports = authService;