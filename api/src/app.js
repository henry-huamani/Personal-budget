const express = require('express');
const morgan = require('morgan');
const {index, operations, authentication} = require('./routes');

const server = express();

server.use(express.json());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
  }
);
server.use('/', index);
server.use('/', authentication);
server.use('/operations', operations);
server.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.message);
});

module.exports = server;