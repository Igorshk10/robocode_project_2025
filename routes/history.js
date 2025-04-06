var express = require('express');
var router = express.Router();
var UserService = require('../services/userService');

router.get('/', async function(req, res, next) {
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear(); 
    const formatDate = `.${month}.${year}`;
    
    const user_username = req.session.user.username;
    const userId = req.session.user.id;
    const transaction = await UserService.getHistoryOfTransaction(userId, formatDate);
    const category = await UserService.getAllCategory();
    res.render('history', { username: user_username , transaction: transaction,  category: category });
});


router.post('/transaction', async function(req, res, next) {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();   
    const transaction_date = `${day}.${month}.${year}`;

    const userId = req.session.user.id;
    await UserService.addTransaction(userId, req.body.category, req.body.transactionAmount, transaction_date);
    res.redirect('/history');
});



router.get("/logout", async (req, res) => {
    try {
        const result = await authService.logout(req);
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;