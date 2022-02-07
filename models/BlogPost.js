const BlogPost = (sequelize, DataTypes) => sequelize.define('BlogPost', {
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  userId: DataTypes.STRING,
  published: DataTypes.DATE,
  updated: DataTypes.DATE,
}, {
  tableName: 'BlogPosts',
  timestamps: false,
});

module.exports = BlogPost;