const Post = (sequelize, DataTypes) => sequelize.define('Post', {
  title: DataTypes.STRING,
}, {
  underscored: true,
});

module.exports = Post;