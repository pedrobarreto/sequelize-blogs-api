const BlogPost = (sequelize, DataTypes) => sequelize.define('BlogPost', {
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  userId: DataTypes.STRING,
  published: DataTypes.DATE,
  updated: DataTypes.DATE,
}, {
  createdAt: 'published',
  updatedAt: 'updated',
  tableName: 'BlogPosts',
  timestamps: true,
});

module.exports = BlogPost;