'use strict';

exports.index = (_request, response) => {
    return response.status(200).send({
        message: "Bem-vindo"
    });
};