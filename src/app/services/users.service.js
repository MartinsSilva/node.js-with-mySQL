'use strict';

exports.getUsersQuery = () => {
    return new Promise((resolve, reject) => {
        let statement = 'SELECT * FROM author';
        global.connection.query(statement, (error, result, _fields) => {
            if (error) return reject(error);
            return resolve(result);
        });
    });
};

exports.getUserQuery = (id) => {
    return new Promise((resolve, reject) => {
        let statement = 'SELECT * FROM author WHERE id = ?';
        global.connection.query(statement, [id], (error, result, _fields) => {
            if (error) return reject(error);
            return resolve(result);
        });
    });
};

exports.createUserQuery = (params) => {
    return new Promise((resolve, reject) => {
        let statement = 'INSERT INTO author (name,email) VALUES (?,?)';
        global.connection.query(statement, [params.name, params.email], (error, result, _fields) => {
            if (error) return reject(error);
            return resolve(result);
        });
    });
};