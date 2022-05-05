const express = require('express');
const userController = require('./controllers/userController');
const categoryController = require('./controllers/categoryController');
const blogPostController = require('./controllers/blogPostController');
const { validateName, validatePassword, validateEmail } = require('./middlewares/userValidation');
const {
  validateTitle,
  validateContent,
  validateCategoryIds } = require('./middlewares/blogPostValidation');
const authentication = require('./middlewares/authentication');

const routes = express.Router();

routes.post('/login', validatePassword, validateEmail, userController.login);
routes.post('/user', validateName, validatePassword, validateEmail, userController.addUser);
routes.get('/user', authentication, userController.getAll);
routes.get('/user/:id', authentication, userController.getById);
routes.post('/categories', authentication, categoryController.createCategory);
routes.get('/categories', authentication, categoryController.getAllCategories);
routes.post('/post',
  authentication,
  validateTitle,
  validateContent,
  validateCategoryIds,
  blogPostController.createBlogPost);
routes.get('/post', authentication, blogPostController.getAllBlogPosts);

module.exports = routes;
