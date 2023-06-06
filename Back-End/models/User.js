const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
        size: 200
    },
    dataNascimento: {
        type: Sequelize.STRING,
        allowNull: true
    },
});

// //Criar a tabela
User.sync();
// //Verificar se há alguma diferença na tabela, realiza a alteração
User.sync({ alter: true })

module.exports = User;