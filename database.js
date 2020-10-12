const mysql = require('mysql');
const configDB = require('./config');

const connection = mysql.createConnection(configDB);

module.exports = connection;