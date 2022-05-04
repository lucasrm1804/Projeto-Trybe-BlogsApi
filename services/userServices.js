const User = require('../models/user');
const { generateToken } = require('../token/token');

async function addUser(displayName, email, password, image) {
  const bankEmail = await User.findOne({ where: { email } });
  if (bankEmail) {
    throw new Error('User already registered');
  }

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