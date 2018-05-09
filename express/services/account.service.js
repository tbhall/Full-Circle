var service = {};

service.register = register;
service.login = login;

module.exports = service;

function register(accountBody) {
  Account.register(new Account({username: accountBody.username}), accountBody.password, function(err) {
    if (err) {
      console.log('error while user register!', err);
      return next(err);
    }

    console.log('user registered!');
    return res.send("User Registered");
  });
}

function login() {
  
}
