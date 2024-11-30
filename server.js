const Hapi = require('@hapi/hapi');
const routes = require('./config/routes');
const config = require('./config/envs-config');

const server = Hapi.server({
    port: config.port,
    host: config.host
});

// Registrar as rotas no servidor Hapi
routes.forEach((route) => server.route(route));

const start = async () => {
    try {
        await server.start();
        console.log('Server running on %s', server.info.uri);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

// Iniciar o servidor
start();

module.exports = server;