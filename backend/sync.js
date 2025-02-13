const sequelize = require('./database');
const Usuario = require('./Produto');

async function sincronizarBanco() {
  try {
    await sequelize.sync({ force: true }); // Cria as tabelas
    console.log('Banco sincronizado com sucesso!');
  } catch (error) {
    console.error('Erro ao sincronizar o banco:', error);
  } finally {
    sequelize.close();
  }
}

sincronizarBanco();