var express = require('express');
var router = express.Router();
var { createUser, authUser , setTransaction } = require('../model/UserRepo');

/* GET users listing. */
router.post('/', async function(req, res, next) {
    let {username, password , email , monthlyBudget} = req.body;
    let resp = await createUser(username, password, email , monthlyBudget);
    res.render('main', { username: resp.username});
}); 

router.post('/transaction', async function(req, res, next) {
    let {category, transactionAmount} = req.body;
    let resp = await setTransaction(category, transactionAmount);
});


module.exports = router;