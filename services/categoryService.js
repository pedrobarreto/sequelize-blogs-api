const { Category } = require('../models');

// https://stackoverflow.com/questions/46380563/get-only-datavalues-from-sequelize-orm
const getAllCategories = async () => Category.findAll({ raw: true });

const createCategory = async ({ name }) => 
Category.create({ name });

module.exports = {
  getAllCategories,
  createCategory,
};