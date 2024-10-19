const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const server = Hapi.server({
    port: 5000,
    host: "0.0.0.0"//localhost
});

//apresenta as rotas http mapeadas ao hapi
routes.forEach((path) => server.route(path));

module.exports = server;