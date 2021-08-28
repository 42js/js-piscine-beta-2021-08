import { Sequelize, Options } from 'sequelize';
import * as dotenv from 'dotenv';
import config from '../config/config';

dotenv.config();

class DatabaseOption implements Options {
  dialect!: 'mysql';

  username!: string;

  password!: string;
}

const createDBOptions = new DatabaseOption();
createDBOptions.username = process.env.DB_USERNAME || 'root';
createDBOptions.password = process.env.DB_PASSWORD || 'your password';
createDBOptions.dialect = 'mysql';

const dbCreateSequelize = new Sequelize(createDBOptions);

console.log(`Creating database [${config.development.database}]`);

dbCreateSequelize
  .getQueryInterface()
  .createDatabase(config.development.database)
  .then(() => {
    console.log('✅db create success!');
    process.exit(0);
  })
  .catch((e) => {
    console.log('❗️error in create db : ', e);
    process.exit(1);
  });
