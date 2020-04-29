const dotenv = require('dotenv')
dotenv.config();

const options = {
  development: {
    HOST: process.env.DEV_PG_HOST,
    PORT: process.env.DEV_PG_PORT,
    USER: process.env.DEV_PG_USER,
    PASSWORD: process.env.DEV_PG_PASSWORD,
    DATABASE: process.env.DEV_PG_DATABASE,
  },
  test: {
    HOST: process.env.TEST_PG_HOST,
    PORT: process.env.TEST_PG_PORT,
    USER: process.env.TEST_PG_USER,
    PASSWORD: process.env.TEST_PG_PASSWORD,
    DATABASE: process.env.TEST_PG_DATABASE,
  },
  production: {
    HOST: process.env.PROD_PG_HOST,
    PORT: process.env.PROD_PG_PORT,
    USER: process.env.PROD_PG_USER,
    PASSWORD: process.env.PROD_PG_PASSWORD,
    DATABASE: process.env.PROD_PG_DATABASE,
  },
};

const config = options[process.env.NODE_ENV || 'development'];

module.exports = {
  type: 'postgres',
  host: config.HOST,
  port: config.PORT,
  username: config.USER,
  password: config.PASSWORD,
  database: config.DATABASE,
  migrationsRun: true,
  logging: true,
  logger: 'file',
  entities: [__dirname + '/dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/dist/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};




