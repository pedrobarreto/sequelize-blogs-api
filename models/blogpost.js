const BlogPost = (sequelize, DataTypes) => sequelize.define('BlogPost', {
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  userId: DataTypes.STRING,
}, {
  underscored: true,
});

module.exports = BlogPost;