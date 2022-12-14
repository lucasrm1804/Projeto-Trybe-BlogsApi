const User = require('../models/user');
const { verifyToken } = require('../token/token');

async function authentication(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const { id } = verifyToken(authorization);
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
}

module.exports = authentication;