import { DataTypes } from 'sequelize';
import { sequelize } from './index';

const User = sequelize.define(
  'users',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING(20), allowNull: false, unique: true },
    email: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
);

export default User;
