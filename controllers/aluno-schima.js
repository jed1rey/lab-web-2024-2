const Joi = require('joi')

const createAluno = {
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

    })

}

const consultaPorId = {
    params: Joi.object({
        id: Joi
            .number()
            .integer()
            .positive()
            .required()

    })
}

const consultarAlunos = {
    query: Joi.object({
        idade: Joi
            .number()
            .integer()
            .max(180),
        nome: Joi
            .string()
            .

            
    })
}

module.exports = {createAluno,
                 consultaPorId,
                 consultarAlunos
                }