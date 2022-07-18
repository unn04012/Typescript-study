import { Connection, createConnection, Entity, EntityTarget, Repository } from 'typeorm';
import { config } from 'dotenv';
import { Service } from 'typedi';
config();
const {
  DATABASE_HOST: host,
  DATABASE_USER: username,
  DATABASE_PASSWORD: password,
  DATABASE_NAME: database,
} = process.env;
export const initTypeORMConnection = async () => {
  const entities = `${__dirname}/entities/**/*.{js,ts}`;
  const connection = await createConnection({
    type: 'mysql',
    host,
    username,
    password,
    database,
    synchronize: false,
    logging: true,
    entities: [entities],
  });
  await testDatabaseConnection(connection);
  return connection;
};

async function testDatabaseConnection(connection: Connection) {
  try {
    await connection.query('SELECT 1');
  } catch (err) {
    const dbHost = this.configurator.mysqlConnectionConfig.host;
    throw new Error(`mysql connection failed for host: ${dbHost}, error: ${err.message}`);
  }
}
