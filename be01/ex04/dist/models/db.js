"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const user_models_1 = __importDefault(require("./user.models"));
const question_models_1 = __importDefault(require("./question.models"));
const answer_models_1 = __importDefault(require("./answer.models"));
user_models_1.default.hasMany(question_models_1.default, {
    sourceKey: 'id',
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
question_models_1.default.hasMany(answer_models_1.default, {
    sourceKey: 'id',
    foreignKey: 'questionId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
answer_models_1.default.belongsTo(user_models_1.default, { foreignKey: 'userId', targetKey: 'id' });
answer_models_1.default.belongsTo(question_models_1.default, { foreignKey: 'questionId', targetKey: 'id' });
const db = { sequelize: index_1.default, Sequelize: sequelize_1.Sequelize, User: user_models_1.default, Question: question_models_1.default, Answer: answer_models_1.default };
exports.default = db;
