const categoryServices = require('../services/categoryServices');

async function createCategory(request, response) {
  const { name } = request.body;
  try {
    const category = await categoryServices.createCategory(name);
    response.status(201).json(category);
    console.log(category);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}

module.exports = {
  createCategory,
};