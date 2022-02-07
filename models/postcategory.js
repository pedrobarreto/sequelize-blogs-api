const PostCategory = (sequelize, DataTypes) => sequelize.define('PostCategory', {
  postId: DataTypes.INTEGER,
  categoryId: DataTypes.INTEGER,
}, {
  underscored: true,
  timestamps: false,
});
module.exports = PostCategory;