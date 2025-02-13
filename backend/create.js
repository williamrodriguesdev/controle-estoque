const sequelize = require('./database');
const Produto = require('./Produto');

async function adicionarProduto() {
  try {
    // Cria um novo produto
    const produto = await Produto.create({
      nome: 'Notebook Dell',
      descricao: 'Notebook Dell Inspiron 15',
      quantidade: 10,
      preco: 3500.00,
      prateleira: 'A1',
      corredor: 'Corredor 1',
      setor: 'Eletrônicos',
    });

    console.log('Produto criado com sucesso:', produto);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
  } finally {
    sequelize.close(); // Fecha a conexão com o banco de dados
  }
}

adicionarProduto();