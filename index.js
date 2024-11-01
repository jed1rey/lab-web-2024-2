const server = require("./config/server");

(async () => {
    await server.start();
    console.log("Server listening " + server.info.uri);
})();