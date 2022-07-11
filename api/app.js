<<<<<<< HEAD
'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Carregar Rotas

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors

// Rotas
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hello word!'
    });
});

app.get('/testing', (req, res) => {
    res.status(200).send({
        message: 'Testing node server!'
    });
});

// Exportações
=======
'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Carregar Rotas

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors

// Rotas
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hello word!'
    });
});

app.get('/testing', (req, res) => {
    res.status(200).send({
        message: 'Testing node server!'
    });
});

// Exportações
>>>>>>> a71e39c93016b6b514dd8da6c8cc5a87aa1dd74e
module.exports = app;