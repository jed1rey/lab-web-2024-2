const alunoController = require("./controllers/aluno-controller");
const Joi = require("joi");

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
    },
    {
        method: "POST",
        path: "/alunos",
        options: {
            handler: alunoController.createAluno,
            validate: {
                payload: Joi.object({
                    nome: Joi
                          .string()
                          .min(2)
                          .required(),
                    idade: Joi
                           .number()
                           .integer()
                           .positive()
                           .max(150)
                           .required(),
                    email
                })
            }
        }
    }
];

module.exports = routes;