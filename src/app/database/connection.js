'use strict';

const mysql = require('mysql');
const databaseConfiguration = require('../config/config');

const connection = mysql.createConnection(databaseConfiguration);

connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }

    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
global.connection = connection;