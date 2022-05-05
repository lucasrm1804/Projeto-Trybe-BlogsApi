const express = require('express');
const userController = require('./controllers/userController');
const categoryController = require('./controllers/categoryController');
const { validateName, validatePassword, validateEmail } = require('./middlewares/userValidation');
const authentication = require('./middlewares/authentication');

const routes = express.Router();

routes.post('/user', validateName, validatePassword, validateEmail, userController.addUser);
routes.post('/login', validatePassword, validateEmail, userController.login);
routes.get('/user', authentication, userController.getAll);
routes.get('/user/:id', authentication, userController.getById);
routes.post('/categories', authentication, categoryController.createCategory);

module.exports = routes;
