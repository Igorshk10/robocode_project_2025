var express = require('express');
var router = express.Router();
var authService = require('../services/authServuce');
var UserService = require('../services/userService');

/* GET users listing. */
router.get('/', async function(req, res, next) {
    const user_username = req.session.user.username;
    const category = await UserService.getAllCategory();
    res.render('main', { username: user_username , category: category});
});

router.get('/api/transaction', async function(req, res, next) {
    const userId = req.session.user.id;
    const transaction = await UserService.getTransactionById(userId);
    res.json({
        transaction: transaction
    });
});


router.post('/transaction', async function(req, res, next) {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();   

    const transaction_date = `${day}.${month}.${year}`;
    const userId = req.session.user.id;
    await UserService.addTransaction(userId, req.body.category, req.body.transactionAmount, transaction_date);
    res.redirect('/main');
});

router.get("/logout", async (req, res) => {
    try {
        req.session = null
        res.clearCookie('user');
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;