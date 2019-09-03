const yup = require('yup');
const userService = require('../userService');

const userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required()
});
    
    const UserController = function () {
      this.create = function ({ name, email, password }) {
        userSchema
          .isValid({
            name,
            email,
            password,
           })
           .then(function(valid) {
              console.log({valid})
           })
           .catch(function(error) {
                console.log({error});
         })
    
    };
    this.getAll = function () {
    };

};

module.exports = UserController;
