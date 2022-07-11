<<<<<<< HEAD
'use strict'

const { default: mongoose } = require("mongoose")

var mongoose = require('mongoose');
var Esquema = mongoose.Esquema;

var UsuarioEsquema = Esquema({
    nome: String,
    sobrenome: String,
    apelido: String,
    email: String,
    senha: String,
    funcao: String,
    imagem: String
});

=======
'use strict'

const { default: mongoose } = require("mongoose")

var mongoose = require('mongoose');
var Esquema = mongoose.Esquema;

var UsuarioEsquema = Esquema({
    nome: String,
    sobrenome: String,
    apelido: String,
    email: String,
    senha: String,
    funcao: String,
    imagem: String
});

>>>>>>> a71e39c93016b6b514dd8da6c8cc5a87aa1dd74e
module.exports = mongoose.modelo('Usuario', UsuarioEsquema);