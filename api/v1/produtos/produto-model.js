const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Produto = database.sequelize.define('Produto', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    quantidadeEstoque: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    codigoBarras: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dimensoes: {
        type: Sequelize.JSONB,
        allowNull: true
    },
    peso: {
        type: Sequelize.JSONB,
        allowNull: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataCadastro: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    tableName: 'produtos',
    timestamps: false
});

module.exports = { Produto };
