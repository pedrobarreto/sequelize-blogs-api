const service = require('../services/blogPostService');

const createPosts = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers; 
  const post = await service.createPost({ authorization, title, content, categoryIds });

  res.status(201).json(post);
};

module.exports = { 
  createPosts,
};