const express = require('express');
const userController = require('./controllers/userController');
const { validateName, validatePassword, validateEmail } = require('./middlewares/userValidation');
const authentication = require('./middlewares/authentication');

const routes = express.Router();

routes.post('/user', validateName, validatePassword, validateEmail, userController.addUser);
routes.post('/login', validatePassword, validateEmail, userController.login);
routes.get('/user', authentication, userController.getAll);
routes.get('/user/:id', authentication, userController.getById);

module.exports = routes;
