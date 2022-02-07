const Category = (sequelize, DataTypes) => sequelize.define('Category', {
  name: DataTypes.STRING,
}, {
  underscored: true,
  tableName: 'Categories',
  timestamps: false,
});

module.exports = Category;