/* eslint-disable import/no-dynamic-require, global-require */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '/../config/config.js'))[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

const User = sequelize.define('users', {
  username: { type: Sequelize.STRING(20), allowNull: false, unique: true },
  email: { type: Sequelize.STRING(50), allowNull: false, unique: true },
  encoded_password: { type: Sequelize.STRING(60), allowNull: false },
  last_jwt_token: { type: Sequelize.STRING(157) },
}, {
  charset: 'utf8',
  collate: 'utf8_general_ci',
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = User;

module.exports = db;
