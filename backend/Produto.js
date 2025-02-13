const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false, // O nome do produto é obrigatório
  },
  descricao: {
    type: DataTypes.TEXT, // Descrição longa do produto
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false, // A quantidade é obrigatória
  },
  nivel: {
    type: DataTypes.STRING, // Localização do produto na prateleira
  },
  corredor: {
    type: DataTypes.STRING, // Localização do produto no corredor
  },
  setor: {
    type: DataTypes.STRING, // Setor do estoque onde o produto está
  },
});

module.exports = Produto;