var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', async function(req, res, next) {
    let {username, password , email , monthlyBudget} = req.body;
    let resp = await createUser(username, password, email , monthlyBudget);
    res.render('username', { username: resp.username});
}); 


module.exports = router;