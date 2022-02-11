const service = require('../services/blogPostService');

const createPosts = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers; 
  const post = await service.createPost({ authorization, title, content, categoryIds });

  res.status(201).json(post);
};

const getPosts = async (req, res) => {
  const { authorization } = req.headers;
  const posts = await service.getAllPosts(authorization);

  res.status(200).json(posts);
};

module.exports = { 
  createPosts,
  getPosts,
};