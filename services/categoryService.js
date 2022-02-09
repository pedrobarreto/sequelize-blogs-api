const { Category } = require('../models');

// https://stackoverflow.com/questions/46380563/get-only-datavalues-from-sequelize-orm
// const getAllUsers = async () => User.findAll({ raw: true });

// const getOneUser = async (user) => User.findOne(user);

const createCategory = async ({ name }) => 
Category.create({ name });

module.exports = {
  // getAllUsers,
  // getOneUser,
  createCategory,
};