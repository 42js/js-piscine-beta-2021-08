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
      // define association here
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
    },
    createAt: {
      type: DataTypes.DATE,
    },
    updateAt: {
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};