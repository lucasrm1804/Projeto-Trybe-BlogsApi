const User = require('../models/user');
const { generateToken } = require('../token/token');

async function addUser(displayName, email, password, image) {
  const user = await User.create({
    displayName,
    email,
    password,
    image,
  });
  return generateToken({ id: user.id });
}

module.exports = {
  addUser,
}; 