const Sequelize = require('sequelize');
const Config = require('../config/config');
const conection = new Sequelize(Config.development);

const User = require('../models/user');
const BlogPost = require('../models/blogPost');
const Category = require('../models/category');

BlogPost.init(conection);
User.init(conection);
Category.init(conection);

BlogPost.associate(conection.models);
Category.associate(conection.models);

module.exports = conection;