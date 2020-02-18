const express = require('express');

const AccountRouter = require('./accounts/accounts-router');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());
server.use('/api/accounts', AccountRouter);
server.get('/', (req, res) => {
	res.send('<h3> Just a poor API from a poor Family!</h3>');
});
module.exports = server;
