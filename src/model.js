const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const db = require('../src/db');

class User extends Model { }

User.init({
  nombre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allownull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
    modelName: 'elpaisas',
    sequelize: db
  });

module.exports = User;
