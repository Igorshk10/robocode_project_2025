var express = require('express');
var router = express.Router();
var authService = require('../services/authServuce');
var UserService = require('../services/userService');

/* GET users listing. */
router.get('/', async function(req, res, next) {
    const user_username = req.session.user.username;
 //   const userId = req.session.user.id;
 //   const transaction = await UserService.getTransactionById(userId);
    res.render('main', { username: user_username});
});

router.get('/api/transactions', async function(req, res) {
    const userId = req.session.user.id;
    try {
        const transactions = await UserService.getTransactionById(userId);
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Не вдалося отримати транзакції' });
    }
});

router.post('/transaction', async function(req, res, next) {
    const userId = req.session.user.id;
    await UserService.addTransaction(userId, req.body.category, req.body.transactionAmount);
    res.redirect('/main');
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