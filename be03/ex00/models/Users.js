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
            username: {
                type: DataTypes.STRING(30),
                notNull: {
                    message: "username을 입력해 주세요.",
                },
                unique: true,
                validator: {
                    is: /^(?=.*[0-9])(?=.*[a-z]).{8,29}$/,
                },
            },
            email: {
                type: DataTypes.STRING(30),
                notNull: {
                    msg: "email을 입력해 주세요.",
                },
                validate: {
                    isEmail: true,
                },
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                notNull: {
                    msg: "password를 입력해 주세요.",
                },
                validate: {
                    is: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&\(\)\{\}\[\]:;<>,.?/~_+-=|]).{8,}$/,
                },
            },
        },
        {
            sequelize,
            tableName: "users",
            modelName: "Users",
        }
    );
    return Users;
};
