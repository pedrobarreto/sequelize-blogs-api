const { BlogPost, User, Category } = require('../models');
const { decodeToken } = require('../utils/tokenJWT');

const createPost = async ({ authorization, title, content, categoryIds }) => {
const { userId } = await decodeToken(authorization);
  return BlogPost.create({ userId, title, content, categoryIds });
};

const getAllPosts = async () => {
  try {
  return BlogPost.findAll({
    include: 
    [{ model: User, as: 'user' },
    { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  } catch (e) {
  return { message: 'Erro' };
}
};

const getOnePost = async (id) => {
  try {
  const post = await BlogPost.findOne({
    where: { id },
    include: 
    [{ model: User, as: 'user' },
    { model: Category, as: 'categories', through: { attributes: [] } }],
  }); 
    if (!post) { return { message: 'Post does not exist' }; }
    return post;
  } catch (e) {
  return { message: 'Erro' };
}
};

module.exports = {
  createPost,
  getAllPosts,
  getOnePost,
};