 const { decodeToken } = require('../utils/tokenJWT');
 
 module.exports = {
  async validateAuth(req, res, next) {
    const { authorization } = req.headers;
    const decode = await decodeToken(authorization);

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    if (decode.message) {
      return res.status(401).json({ message: decode.message });
    }
    next();
  },
};
