const { Router } = require('express');
const controller = require('./controller');

const routers = Router();

routers.get('/', controller.home);
routers.get('/users', controller.getUsers);
routers.get('/user/:id', controller.getUser);

module.exports = routers;
