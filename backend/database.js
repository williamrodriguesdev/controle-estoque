const { Sequelize } = require('sequelize');

// Conectando ao banco de dados PostgreSQL
const sequelize = new Sequelize('controle_estoque', 'postgres', 'senha123', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
