const Joi = require('joi');

// Schema para criar e atualizar um produto
const produtoBase = Joi.object({
    nome: Joi.string().min(3).max(100).required(),
    descricao: Joi.string().min(10).max(500).optional(),
    categoria: Joi.string().valid('Eletrônicos', 'Vestuário', 'Alimentos', 'Móveis', 'Livros').required(),
    marca: Joi.string().min(2).max(50).required(),
    preco: Joi.number().greater(0).required(),
    quantidadeEstoque: Joi.number().integer().min(0).required(),
    codigoBarras: Joi.string().length(13).pattern(/^\d+$/).required(),
    dimensoes: Joi.object({
        altura: Joi.number().greater(0).required(),
        largura: Joi.number().greater(0).required(),
        profundidade: Joi.number().greater(0).required(),
        unidadeMedida: Joi.string().valid('cm', 'm', 'mm').required()
    }).required(),
    peso: Joi.object({
        valor: Joi.number().greater(0).required(),
        unidadeMedida: Joi.string().valid('kg', 'g').required()
    }).required(),
    status: Joi.string().valid('ativo', 'inativo').default('ativo'),
    dataCadastro: Joi.date().iso().optional()
});

// Schema para criar um novo produto
const createProduto = {
    payload: produtoBase
};

// Schema para atualizar um produto
const updateProduto = {
    payload: produtoBase.keys({
        id: Joi.string().required()  // ID obrigatório para a atualização
    })
};

// Schema para consulta por ID
const consultaPorId = {
    params: Joi.object({
        id: Joi.string().required()
    })
};

// Schema para filtrar produtos
const consultaProdutos = {
    query: Joi.object({
        categoria: Joi.string().valid('Eletrônicos', 'Vestuário', 'Alimentos', 'Móveis', 'Livros').optional(),
        nome: Joi.string().min(3).max(100).optional(),
        status: Joi.string().valid('ativo', 'inativo').optional()
    })
};

module.exports = {
    createProduto,
    updateProduto,
    consultaPorId,
    consultaProdutos
};
