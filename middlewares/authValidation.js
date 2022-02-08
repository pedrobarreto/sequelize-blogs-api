 module.exports = {
  validateAuth(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    if (authorization.length < 16) {
      return res.status(401)
      .json({ message: 'Expired or invalid token' });
    }
    next();
  },
};
