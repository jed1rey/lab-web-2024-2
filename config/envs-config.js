// ./config/envs-config.js
require('dotenv').config();

const config = {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 3000,
    database: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        name: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    }
};

module.exports = config;
