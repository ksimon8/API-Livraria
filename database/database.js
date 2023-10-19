//IMPORTAÇÃO DO MODULO DO SEQUELIZE
const sequelize = require("sequelize");

//CRIA A CONEXÃO COM O BANCO DE DADOS POR MEIO DO SEQUELIZE
/*
PARAMETROS:
1º - Nome do banco de dados
2º - Usuario do banco de dados
3º - A senha do banco de dados
4º - Objeto JSON com dados de configuração:
        1 - host do banco de dados
        2 - a porta logica do banco de dados
        3 - dialeto sql a ser utilizado
        4 - timezone
 */
const connection = new sequelize(
    "bd_api_livraria",
    "root",
    "",
    {
        host:"localhost",
        port:"3307",
        dialect:"mysql",
        timezone:"-03:00"
    }
);

module.exports = connection;