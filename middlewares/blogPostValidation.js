const schema = require('../utils/blogPostSchema');

 module.exports = {
    async validateBody(req, res, next) {
    const { title, content, categoryIds } = req.body;
    const { error } = schema.validate({ title, content, categoryIds });

    if (error) {
   return res.status(400).json({ message: error.message });
    } 
    next();
},

 };
