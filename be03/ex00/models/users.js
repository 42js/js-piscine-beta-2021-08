'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.User.hasMany(models.Posts, {
        foreignKey: 'fk_userId'
      });
    }
  };
  User.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
    }, 
    password: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    isCadet: {
      type: DataTypes.BOOLEAN,
    },
    careerYears: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'User'
  });
  return User;
};