const Sequelize = require('sequelize');
const db = require('./db');

const Produtos = db.define('produtos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    anunciante: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.STRING,
        allowNull: false,
        size: 200
    },
});

// //Criar a tabela
Produtos.sync();
// //Verificar se há alguma diferença na tabela, realiza a alteração
Produtos.sync({ alter: true })

module.exports = Produtos;