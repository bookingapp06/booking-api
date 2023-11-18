import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

config();

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  port: 5432,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST?.split(':')[0],
  synchronize: false,
  logging: false,
  migrationsTableName: 'migrations',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
