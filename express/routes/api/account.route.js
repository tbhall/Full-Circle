const passport = require('passport');
const Account = require('../../models/account.model');
const router = require('express').Router();

// route for register action

router.post('/register', function(req, res, next) {
  console.log('registering account');
  Account.register(new Account({username: req.body.username}), req.body.password, function(err) {
    if (err) {
      console.log('error while account registration!', err);
      return next(err);
    }

    console.log('account registered!');
    return res.status(200).send("Successfully Registed Account")
  });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  return res.status(200).send('Successfully Logged in')
});

module.exports = router;
