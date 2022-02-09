const schema = require('../utils/categorySchema');

 module.exports = {
    async validateBody(req, res, next) {
    const { name } = req.body;
    const { error } = schema.validate({ name });

    if (error) {
   return res.status(400).json({ message: error.message });
    } 
    next();
},

 };
