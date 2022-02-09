const service = require('../services/categoryService');

const createCategories = async (req, res) => {
  const { name } = req.body;
  const categories = await service.createCategory({ name });

  res.status(201).json(categories);
};

module.exports = { 
  createCategories,
};