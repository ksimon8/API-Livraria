//IMPORTAÇÃO DO MODULO DO SEQUELIZE
const sequelize = require("sequelize");

//IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS
const connection = require("../database/database");

/*
MAPEAMENTO DA TABELA DE CATEGORIA

PARAMETROS DO METODO define:
1º - NOME DA TABELA
2º - CAMPOS DA TABELA E SUAS REGRAS (DEVE SER UM JSON)
*/
const Categoria = connection.define(
    'tbl_categoria',
    {
        cod_categoria:{
            type: sequelize.INTEGER,
            autoIncrement:true, //autoIncrement: começa em zero depois soma +1
            primaryKey:true
        },
        nome_categoria:{
            type: sequelize.STRING(250),
            allowNull: false
        }
    }
);

//SINCRONIZAÇÃO COM O BANCO DE DADOS - CRIA TABELA CASO ESTA NÃO EXISTA
Categoria.sync({force:false});


module.exports = Categoria;