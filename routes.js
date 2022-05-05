const express = require('express');
const userController = require('./controllers/userController');
const { validateName, validatePassword, validateEmail } = require('./middlewares/userValidation');

const routes = express.Router();

routes.post('/user', validateName, validatePassword, validateEmail, userController.addUser);
routes.post('/login', validatePassword, validateEmail, userController.login);

module.exports = routes;
