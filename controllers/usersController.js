const jwt = require('jsonwebtoken');
const service = require('../services/userService');

const createUsers = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const users = await service.createUser({ displayName, email, password, image });

  res.status(201).json(users);
};

const getUsers = async (req, res) => {
  const users = await service.getAllUsers();

  res.status(200).json(users);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await service.getOneUser({ where: { id } });

  res.status(200).json(user);
};

const getLogin = async (req, res) => {
  const token = await jwt.sign(req.body, 'SEGREDO', {
    algorithm: 'HS256',
    expiresIn: '1h',
  });

  res.status(200).json({ token });
};

module.exports = {
  createUsers,
  getUsers,
  getUser,
  getLogin,
};