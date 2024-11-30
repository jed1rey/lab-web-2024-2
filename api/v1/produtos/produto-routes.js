const produtoController = require('./produto-controller');
const Joi = require('joi');

const baseVersion = '/v1';

const routes = [
    {
        method: 'POST',
        path: `${baseVersion}/produtos`,
        options: {
            handler: produtoController.createProduto,
            validate: {
                payload: Joi.object({
                    id: Joi.string().required(),
                    nome: Joi.string().required(),
                    descricao: Joi.string().allow(null, ''),
                    categoria: Joi.string().required(),
                    marca: Joi.string().required(),
                    preco: Joi.number().required(),
                    quantidadeEstoque: Joi.number().integer().required(),
                    codigoBarras: Joi.string().required(),
                    dimensoes: Joi.object({
                        altura: Joi.number().required(),
                        largura: Joi.number().required(),
                        profundidade: Joi.number().required(),
                        unidadeMedida: Joi.string().required()
                    }),
                    peso: Joi.object({
                        valor: Joi.number().required(),
                        unidadeMedida: Joi.string().required()
                    }),
                    status: Joi.string().required(),
                    dataCadastro: Joi.date().required()
                })
            }
        }
    },
    {
        method: 'PUT',
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: produtoController.updateProduto
        }
    },
    {
        method: 'DELETE',
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: produtoController.deleteProduto
        }
    },
    {
        method: 'GET',
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: produtoController.getProdutoById
        }
    },
    {
        method: 'GET',
        path: `${baseVersion}/produtos`,
        options: {
            handler: produtoController.getProdutosByFilters,
            validate: {
                query: Joi.object({
                    categoria: Joi.string().optional(),
                    nome: Joi.string().optional()
                })
            }
        }
    }
];

module.exports = routes;
