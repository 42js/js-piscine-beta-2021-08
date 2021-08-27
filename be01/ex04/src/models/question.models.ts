import { DataTypes } from 'sequelize';
import sequelize from './index';

const Question = sequelize.define(
  'questions',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    content: { type: DataTypes.STRING(191) },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
  },
);

export default Question;
