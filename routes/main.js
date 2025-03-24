var express = require('express');
var router = express.Router();
var { createUser, authUser } = require('../model/UserRepo');

/* GET users listing. */
router.post('/', async function(req, res, next) {
    let {username, password , email , monthlyBudget} = req.body;
    let resp = await createUser(username, password, email , monthlyBudget);
    res.render('main');
}); 


module.exports = router;