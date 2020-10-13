'use strict';

exports.getUsersQuery = () => {
    return new Promise((resolve, reject) => {
        let query = 'SELECT * FROM author';
        global.connection.query(query, (error, result, _fields) => {
            if (error) return reject(error);
            return resolve(result);
        });
    });
};

exports.getUserQuery = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM author WHERE id = ?';
        global.connection.query(query, [id], (error, result, _fields) => {
            if (error) return reject(error);
            return resolve(result);
        });
    });
};