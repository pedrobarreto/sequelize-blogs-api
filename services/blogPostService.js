const { BlogPost } = require('../models');
const { decodeToken } = require('../utils/tokenJWT');

const createPost = async ({ authorization, title, content, categoryIds }) => {
const { userId } = await decodeToken(authorization);
  return BlogPost.create({ userId, title, content, categoryIds });
};

module.exports = {
  createPost,
};