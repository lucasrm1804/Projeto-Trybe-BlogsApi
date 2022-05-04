const express = require('express');
const userController = require('./controllers/userController');

const routes = express.Router();

routes.post('/user', userController.addUser);

module.exports = routes;
