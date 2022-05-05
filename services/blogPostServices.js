const BlogPost = require('../models/blogPost');
const Category = require('../models/category');
const User = require('../models/user');

async function createBlogPost(title, content, userId, categoryIds) {
  const categoriesPromise = categoryIds.map((id) => Category.findByPk(id));
  const categories = await Promise.all(categoriesPromise);
  if (categories.some((cat) => cat === null)) {
    throw new Error('"categoryIds" not found');
  }
  const newBlogPost = await BlogPost.create({
    title,
    content,
    userId,
  });
  newBlogPost.addCategories(categories);
  return newBlogPost;
}

async function getAllBlogPosts() {
  const allBlogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories' },
    ],
  });
  return allBlogPosts;
}

module.exports = {
  createBlogPost,
  getAllBlogPosts,
};
