"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Users.init(
        {
            username: { type: DataTypes.STRING(20), allowNull: false },
            email: { type: DataTypes.STRING(50), allowNull: false },
            isCadet: DataTypes.BOOLEAN,
            careerYears: DataTypes.INTEGER,
        },
        {
            sequelize,
            timestamps: true,
            createdAt: true,
            updatedAt: true,
            tableName: "users",
            modelName: "Users",
        }
    );
    return Users;
};
