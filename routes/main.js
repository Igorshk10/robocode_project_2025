var express = require('express');
var router = express.Router();
var { createUser, authUser , setTransaction } = require('../model/UserRepo');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('main');
});

router.post('/transaction', async function(req, res, next) {
    let {category, transactionAmount} = req.body;
    let resp = await setTransaction(category, transactionAmount);
    res.redirect('/main');
});


module.exports = router;