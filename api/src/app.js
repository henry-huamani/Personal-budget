const express = require('express');
const morgan = require('morgan');
const {index, operations} = require('./routes');

const server = express();

server.use(express.json());
server.use(morgan('dev'));
server.use('/', index);
server.use('/operations', operations);
server.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.message);
});

module.exports = server;