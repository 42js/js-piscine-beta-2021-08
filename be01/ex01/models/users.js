"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    users.init(
        {
            username: { type: DataTypes.STRING(20), allowNull: false },
            email: { type: DataTypes.STRING(50), allowNull: false },
            isCadet: DataTypes.BOOLEAN,
            carrerYears: DataTypes.INTEGER,
        },
        {
            sequelize,
            timestamps: true,
            createdAt: true,
            updatedAt: true,
            modelName: "users",
        }
    );
    return users;
};
