const JWT = require('jsonwebtoken');

const generateToken = (params = {}) => JWT.sign(params, process.env.JWT_SECRET);

const verifyToken = (token) => JWT.verify(token, process.env.JWT_SECRET);

module.exports = {
  generateToken,
  verifyToken,
};