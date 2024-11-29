const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../../config/sequelize');

const Produto = sequelize.define('Produto', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: DataTypes.STRING,
  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  },
  marca: DataTypes.STRING,
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  quantidadeEstoque: DataTypes.INTEGER,
  codigoBarras: {
    type: DataTypes.STRING,
    unique: true
  },
  dimensoes: {
    type: DataTypes.JSON
  },
  peso: {
    type: DataTypes.JSON
  },
  status: {
    type: DataTypes.ENUM('ativo', 'inativo'),
    defaultValue: 'ativo'
  },
  dataCadastro: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  tableName: 'produtos',
  timestamps: false
});

module.exports = Produto;
