import { Sequelize } from 'sequelize';
import config from '../config/config';

export const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: 'mysql',
    // for emoji
    dialectOptions: {
      charset: 'utf8mb4',
    },
  },
);

export default sequelize;
