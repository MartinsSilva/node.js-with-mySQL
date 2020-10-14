'use strict';

const usersService = require('../services/users.service');

exports.getUsers = (_request, response) => {
    usersService
        .getUsersQuery()
        .then((users) => {
            return response
                .status(200)
                .send({
                    users: users
                });
        }).catch((error) => {
            return response
                .status(500)
                .send({
                    error: error.message
                });
        });
};

exports.getUser = (request, response) => {
    let userId = request.params.id;
    usersService
        .getUserQuery(userId)
        .then((user) => {
            user = user[0];
            let result = user ? {
                statusCode: 200,
                data: user
            } : {
                statusCode: 404,
                data: 'Not Found'
            };
            return response
                .status(result.statusCode)
                .send({
                    user: result.data
                });
        }).catch((error) => {
            return response
                .status(500)
                .send({
                    error: error.message
                });
        });
};

exports.createUser = (request, response) => {
    let params = request.body;
    usersService
        .createUserQuery(params)
        .then((user) => {
            return response
                .status(201)
                .send({
                    message: 'User successfully registered'
                });
        }).catch((error) => {
            return response
                .status(500)
                .send({
                    error: error.message
                });
        });
};