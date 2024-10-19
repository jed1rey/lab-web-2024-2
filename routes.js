const alunoController = require("./controllers/aluno-controller");

const routes = [
    {
        method: "GET",
        path: "/ping",
        handler: (request, h) => {
            return "pong";
        }
    },
    {
        method: "GET",
        path: "/alunos",
        options: {
            handler: alunoController.getAlunos
        }
    }
];

module.exports = routes;