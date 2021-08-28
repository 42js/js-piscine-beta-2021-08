import { Sequelize } from 'sequelize';
import { sequelize } from './index';
import User from './user';

const db = { sequelize, Sequelize, User };

export default db;
