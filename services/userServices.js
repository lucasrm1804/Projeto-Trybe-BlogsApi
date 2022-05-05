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

async function login(email, password) {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('Invalid fields');
  }
  if (user.password !== password) {
    throw new Error('Invalid fields');
  }
  return generateToken({ id: user.id });
}

async function getAll() {
  const users = await User.findAll();
  return users;
}

async function getById(id) {
  const user = await User.findByPk(id);
  return user;
}

module.exports = {
  addUser,
  login,
  getAll,
  getById,
}; 