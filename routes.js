const alunoController = require("./controllers/aluno-controller");
const alunoSchema = require("./controllers/aluno-schima")


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
            handler: alunoController.getAlunos,
            validate: 
        }
    },
    {
        method: "GET",
        path: "/alunos/{id}",
        options: {
            handler: alunoController.alunoPorId,
            validate: alunoSchema.consultaPorId
        }
    },

    {
        method: "POST",
        path: "/alunos",
        options: {
            handler: alunoController.createAluno,
            validate: alunoSchema.createAluno

        }
    }
]

module.exports = routes;