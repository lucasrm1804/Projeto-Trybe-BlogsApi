const userServices = require('../services/userServices');

const addUser = async (request, response) => {
  const { displayName, email, password, image } = request.body;
    try {
    const token = await userServices.addUser(displayName, email, password, image);
    response.status(201).json({ token });
  } catch (error) {
    console.log(error);
    response.status(409).json({ message: error.message });
  }
};

module.exports = {
  addUser,
};