const schema = require('../utils/categorySchema');
const { getOneCategory } = require('../services/categoryService');

 module.exports = {
    async validateBody(req, res, next) {
    const { name } = req.body;
    const { error } = schema.validate({ name });

    if (error) {
   return res.status(400).json({ message: error.message });
    } 
    next();
},
async validateCategory(req, res, next) {
    const { categoryIds } = req.body;
    const category = await getOneCategory(categoryIds);
    if (category) {
   return res.status(400).json({ message: '"categoryIds" not found' });
    } 
    next();
},

 };
