const Category = require('../models/Category');

async function createCategory(name) {
  if (!name) {
    throw new Error('"name" is required');
  }
  const category = await Category.create({ name });
  return category;
}

module.exports = {
  createCategory,
};