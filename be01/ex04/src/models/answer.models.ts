import { DataTypes } from 'sequelize';
import sequelize from './index';

const Answer = sequelize.define(
  'answers',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    content: { type: DataTypes.TEXT },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
  },
);

export default Answer;
