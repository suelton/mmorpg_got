/*Importar o mongodb */
var mongo = require('mongodb');
var connMongoDB = function(){
   console.log('Entrou na funcao de conexao');
   var db = new mongo.Db(
                'got',
                new mongo.Server(
                    'localhost', //string contendo o endereço do banco de dados
                    27017, //porta de conexao
                    {}
                ),
                {}
            );
    return db;
}

module.exports = function(){
    return connMongoDB; 
}