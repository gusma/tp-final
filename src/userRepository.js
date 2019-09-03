const Base = require('./db');
const User = require('./model')

const UserRepository = {
  add: (nombre, password, email) => {
    User.create({ nombre, password, email })
      .then(function(user) {
        console.log('success', user.toJSON());
      })
      .catch(function(err) {
          console.log(err);
      });
  },
  getAll: () => {
    return User.findAll()
  }
}
module.exports = UserRepository;
