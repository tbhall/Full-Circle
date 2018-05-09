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

router.post('/login', function (req, res, next) {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: 'Unsuccessful Login'
            });
        }
       req.login(user, {session: false}, (err) => {
           if (err) {
               res.send(err);
           }
           // generate a signed son web token with the contents of user object and return it in the response
           const token = jwt.sign(user, config.secret);
           return res.status(200).json({status: 200, data: {username: user.username, token: token}, message: "Successfully Logged In"});
        });
    })(req, res);
});

module.exports = router;
