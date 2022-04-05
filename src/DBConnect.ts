import { DataSource } from 'typeorm';
import { config } from 'dotenv';
config();
const {
  DATABASE_HOST: host,
  DATABASE_USER: username,
  DATABASE_PASSWORD: password,
  DATABASE_NAME: database,
} = process.env;

if (!host || !username || !password || !database) throw new Error('no value');
export const dataSource = new DataSource({
  type: 'mysql',
  host,
  port: 3306,
  username,
  password,
  database,
  synchronize: false,
  entities: ['src/entities/**/*.ts'],
});
