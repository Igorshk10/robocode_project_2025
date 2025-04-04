var express = require('express');
var router = express.Router();
var UserService = require('../services/userService');

router.get('/', async function(req, res, next) {
    const user_username = req.session.user.username;
    const userId = req.session.user.id;
    const transaction = await UserService.getTransactionById(userId);
    console.log(transaction);
    res.render('history', { username: user_username , transaction: transaction });
});


router.post('/transaction', async function(req, res, next) {
    const userId = req.session.user.id;
    await UserService.addTransaction(userId, req.body.category, req.body.transactionAmount);
    res.redirect('/history');
});

module.exports = router;