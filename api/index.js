'use strict'

// Chamando variável mongoose
var mongoose = require('mongoose');

// Conexão com Banco de Dados
// Promisse é para todos os usuários do pc terem acesso 
mongoose.Promisse = global.Promisse;

// Passando url e dizendo que todo usuário do Mongo tem acesso
mongoose.connect('mongodb://localhost:27017/projeto-fullstack-web',
    {useMongoClient: true})
    .then(() => {
        console.log('Conexão realizada com sucesso!')
    })
    .catch(err => console.log(err));