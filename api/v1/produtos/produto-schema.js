const Joi = require("joi");

const createProduto = {
    payload: Joi.object({
        id: Joi
            .string()
            .required(),
        nome: Joi
            .string()
            .min(2)
            .required(),
        descricao: Joi
            .string()
            .allow(null, ''),
        categoria: Joi
            .string()
            .required(),
        marca: Joi
            .string()
            .required(),
        preco: Joi
            .number()
            .required(),
        quantidadeEstoque: Joi
            .number()
            .integer()
            .required(),
        codigoBarras: Joi
            .string()
            .required(),
        dimensoes: Joi
            .object({
                altura: Joi.number().required(),
                largura: Joi.number().required(),
                profundidade: Joi.number().required(),
                unidadeMedida: Joi.string().required()
            }),
        peso: Joi
            .object({
                valor: Joi.number().required(),
                unidadeMedida: Joi.string().required()
            }),
        status: Joi
            .string()
            .valid('ATIVO', 'INATIVO')
            .required(),
        dataCadastro: Joi
            .date()
            .required()
    })
};

const updateProduto = {
    payload: Joi.object({
        nome: Joi
            .string()
            .min(2),
        descricao: Joi
            .string()
            .allow(null, ''),
        categoria: Joi
            .string(),
        marca: Joi
            .string(),
        preco: Joi
            .number(),
        quantidadeEstoque: Joi
            .number()
            .integer(),
        codigoBarras: Joi
            .string(),
        dimensoes: Joi
            .object({
                altura: Joi.number(),
                largura: Joi.number(),
                profundidade: Joi.number(),
                unidadeMedida: Joi.string()
            }),
        peso: Joi
            .object({
                valor: Joi.number(),
                unidadeMedida: Joi.string()
            }),
        status: Joi
            .string()
            .valid('ATIVO', 'INATIVO'),
        dataCadastro: Joi
            .date()
    }).min(1) // Garante que pelo menos um campo é enviado para atualizar
};

const deleteProduto = {
    params: Joi.object({
        id: Joi
            .string()
            .required()
    })
};

const consultaPorId = {
    params: Joi.object({
        id: Joi
            .string()
            .required()
    })
};

const consultarProdutos = {
    query: Joi.object({
        categoria: Joi
            .string()
            .optional(),
        nome: Joi
            .string()
            .min(3)
            .optional(),
        status: Joi
            .string()
            .valid('ATIVO', 'INATIVO')
            .default('ATIVO')
    })
};

module.exports = {
    createProduto,
    updateProduto,
    deleteProduto,
    consultaPorId,
    consultarProdutos
};
