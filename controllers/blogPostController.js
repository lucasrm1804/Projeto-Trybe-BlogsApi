const blogPostService = require('../services/blogPostServices');

async function createBlogPost(req, res) {
  const { title, content, categoryIds } = req.body;
  const userId = req.user.id;
  try {
    const newBlogPost = await blogPostService.createBlogPost(title, content, userId, categoryIds);
    res.status(201).json(newBlogPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getAllBlogPosts(req, res) {
  try {
    const allBlogPosts = await blogPostService.getAllBlogPosts();
    res.status(200).json(allBlogPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createBlogPost,
  getAllBlogPosts,
};