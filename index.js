require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const user = require('./middlewares/userValidation');
const login = require('./middlewares/loginValidation');
const category = require('./middlewares/categoryValidation');
const auth = require('./middlewares/authValidation');
const userController = require('./controllers/usersController');
const categoriesController = require('./controllers/categoriesController');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar.
app.get('/', (request, response) => {
  response.send();
});

app.get('/user/:id', auth.validateAuth, user.validateId, userController.getUser);
app.get('/user', auth.validateAuth, userController.getUsers);
app.post('/user', user.validateBody, userController.createUsers);
app.post('/login', login.validateLogin, userController.getLogin);
app.post('/categories', category.validateBody, auth.validateAuth, 
categoriesController.createCategories);