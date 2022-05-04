const Sequelize = require('sequelize');
const config = ('../config/config.js');
const conection = new Sequelize(Config.development)
const User = require('../models/user');
const BlogPost = require('../models/blogPost');
const Category = require('../models/Category');

User.init(conection);
BlogPost.init(conection);
Category.init(conection);

BlogPost.associate(conection.models);
Category.associate(conection.models);


module.exports = conection;

