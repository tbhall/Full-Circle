var express = require('express')

var router = express.Router()

//require route variables here
var accounts = require('./api/account.route')


//add route modules here
router.use('/api/accounts', accounts);

module.exports = router;
