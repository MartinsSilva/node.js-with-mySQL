'use strict';

const express = require('express');
const app = express();

/** Database Connection **/
require('./database/connection');

/** Routes **/
const indexRoutes = require('./routes/index.routes');
const usersRoutes = require('./routes/users.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/favicon.ico', (_request, response) => response.status(204));
app.use('/', indexRoutes);
app.use('/users', usersRoutes);
app.use((_request, response) => {
    response
        .status(404)
        .send({
            message: 'Endpoint Not Found'
        });
});

module.exports = app;