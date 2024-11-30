const { Op } = require('sequelize');
const produtoModel = require('./produto-model');

const save = async (produto) => {
    const saved = await produtoModel.Produto.create(produto);
    return saved;
};

const update = async (id, produto) => {
    await produtoModel.Produto.update(produto, { where: { id } });
    return { id, ...produto };
};

const remove = async (id) => {
    await produtoModel.Produto.destroy({ where: { id } });
    return { message: `Produto com id ${id} removido.` };
};

const findById = async (id) => {
    return await produtoModel.Produto.findOne({ where: { id } });
};

const findByFilters = async (filters) => {
    return await produtoModel.Produto.findAll({ where: filters });
};

module.exports = { save, update, remove, findById, findByFilters };
