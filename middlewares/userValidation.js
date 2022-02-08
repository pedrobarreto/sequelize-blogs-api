const service = require('../services/userService');
const schema = require('../utils/userSchema');

 module.exports = {
    async validateUser(req, res, next) {
    let userExists; 
    const { displayName, email, password } = req.body;
    const { error } = schema.validate({ displayName, email, password });

    if (email) { 
    userExists = await service.getOneUser({ where: { email } });
    }

    if (error) {
   return res.status(400).json({ message: error.message });
    }
    if (userExists) {
      return res.status(409).json({ message: 'User already registered' });
       }
    next();
},
 };
