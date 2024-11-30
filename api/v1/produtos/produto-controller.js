const produtoBusiness = require('./produto-business');

const createProduto = async (request, h) => {
    const result = await produtoBusiness.save(request.payload);
    return h.response(result).code(201);
};

const updateProduto = async (request, h) => {
    const id = request.params.id;
    const result = await produtoBusiness.update(id, request.payload);
    return h.response(result).code(200);
};

const deleteProduto = async (request, h) => {
    const id = request.params.id;
    const result = await produtoBusiness.remove(id);
    return h.response(result).code(200);
};

const getProdutoById = async (request, h) => {
    const id = request.params.id;
    const result = await produtoBusiness.findById(id);
    return result ? h.response(result).code(200) : h.response().code(404);
};

const getProdutosByFilters = async (request, h) => {
    const filters = request.query;
    const result = await produtoBusiness.findByFilters(filters);
    return h.response(result).code(200);
};

module.exports = { createProduto, updateProduto, deleteProduto, getProdutoById, getProdutosByFilters };
