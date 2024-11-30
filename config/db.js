const Sequelize = require('sequelize');
const envConfig = require('./envs-config');

const sequelizeConfig = {
    dialect: 'postgres',
    port: envConfig.database.port,
    host: envConfig.database.host,
    logging: console.log
};


const sequelize = new Sequelize(envConfig.database.name, 
                                envConfig.database.user,
                                envConfig.database.password, 
                                sequelizeConfig);


sequelize.authenticate()
.then(() => console.log('Conexão concluida'))
.catch(err => console.error('Erro:', err));

module.exports = {sequelize};