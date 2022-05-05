const userServices = require('../services/userServices');

const addUser = async (request, response) => {
  const { displayName, email, password, image } = request.body;
    try {
    const token = await userServices.addUser(displayName, email, password, image);
    response.status(201).json({ token });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

async function login(request, response) {
  const { email, password } = request.body;
  try {
    const token = await userServices.login(email, password);
    response.status(200).json({ token });
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}

async function getAll(request, response) {
  try {
    const users = await userServices.getAll();
    response.status(200).json(users);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}

async function getById(request, response) {
  const { id } = request.params;
  try {
    const user = await userServices.getById(id);
    response.status(200).json(user);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
}

module.exports = {
  addUser,
  login,
  getAll,
  getById,
};