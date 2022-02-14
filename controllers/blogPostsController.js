const service = require('../services/blogPostService');

const createPosts = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers; 
  const post = await service.createPost({ authorization, title, content, categoryIds });

  res.status(201).json(post);
};

const getPosts = async (req, res) => {
  const posts = await service.getAllPosts();

  res.status(200).json(posts);
};

const getPost = async (req, res) => {
  const { id } = req.params;
  const post = await service.getOnePost(id);
  
  res.status(200).json(post);
};

const updatePosts = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  await service.updatePost({ id: +id, title, content });
  const post = await service.getOnePost(id);
  
  res.status(200).json(post);
};

const deletePosts = async (req, res) => {
  const { id } = req.params;
  await service.deletePost({ id: +id });

  res.status(204).json();
};

module.exports = { 
  createPosts,
  getPosts,
  getPost,
  updatePosts,
  deletePosts,
};