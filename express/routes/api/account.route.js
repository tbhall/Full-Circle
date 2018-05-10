const passport = require('passport');
const Account = require('../../models/account.model');
const router = require('express').Router();
const config = require('../../config/database');
const jwt = require('jsonwebtoken');

// route for register action

router.post('/register', function(req, res, next) {
  Account.register(new Account({username: req.body.username}), req.body.password, function(err) {
    if (err) {
      return next(err);
    }

    return res.status(200).send("Successfully Registed Account")
  });
});

router.post('/login', passport.authenticate('local', {session: false}), function(req, res) {
  const token = jwt.sign({username: req.body.username, iat: Math.floor(Date.now() / 1000) - 30}, config.secret);
  return res.status(200).json({status: 200, data: {username: req.body.username, token: token}, message: "Successfully Logged In"});
});

module.exports = router;
