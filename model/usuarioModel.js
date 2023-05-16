//IMPORTAÇÃO DO SEQUELIZE 
const sequelize  = require('sequelize');

// IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS /
const connection = require('../database/database');


    /*DEFINIÇÃO DA ESTRUTURA DA TABELA DE CATEGORIAS 
    PARAMETROS:
    1 - NOME DA TABELA
    2 - UM OU MAIS OBJETOS JSON QUE VÃO REPRESENTAR OS CAPOS, SEUS TIPOS E
        REGRAS DE PREENCHIMENTO*/

const usuario = connection.define(
    'tbl_usuario',
    {
        ID_usuario:{
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        nome_usuario:{
            type: sequelize.STRING,
            allowNull: false
        },

        email_usuario:{
            type: sequelize.STRING,
            allowNull: false
        },

        senha_usuario:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

// usuario.sync({force:true});

module.exports = usuario;
