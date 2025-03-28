const UserRepository = require('../model/UserRepo');
const bcrypt = require('bcrypt');

const authService = {
    createUser: async (username, password, email, monthlyBudget) => {
        let user = await UserRepository.getUserByUsername(username);
        if (!user) {
            return await UserRepository.createUser(username, password, email, monthlyBudget);
        } else {
            throw new Error("Username already taken");
        }
    },
    auth: async (req, username, password, email , monthlyBudget) => {
        const user = await UserRepository.getUserByUsername(username);
        if (!user) {
            throw new Error("User not found");
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid credentials");
        }
        req.session.user = {id: user.id,username: user.username,monthlyBudget: user.monthlyBudget};

        return {message: "Login successful"};
    },
    logout: (req) => {
        return new Promise((resolve, reject) => {
            req.session.destroy((err) => {
                if (err) {
                    reject(new Error("Logout failed"));
                } else {
                    resolve({message: "Logout successful"});
                }
            });
        });
    }
};

module.exports = authService;