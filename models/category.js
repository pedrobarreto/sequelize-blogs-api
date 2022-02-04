const Category = (sequelize, DataTypes) => sequelize.define('Category', {
  name: DataTypes.STRING,
}, {
  underscored: true,
});

module.exports = Category;