const service = require('../services/userService');

const createUsers = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const users = await service.createUser({ displayName, email, password, image });

  res.status(201).json(users);
};

module.exports = {
  createUsers,
};