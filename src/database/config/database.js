require('dotenv/config');
module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        port: process.env.DB_PORT,
    },
    test: {
        username: process.env.TEST_DB_USER,
        password: process.env.TEST_DB_PASSWORD,
        database: process.env.TEST_DB_NAME,
        host: process.env.TEST_DB_HOST,
        port: process.env.TEST_DB_PORT,
        dialect: 'postgres',
        port: process.env.TEST_DB_PORT,
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        port: process.env.DB_PORT,
    },
};
