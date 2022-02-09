require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const user = require('./middlewares/userValidation');
const login = require('./middlewares/loginValidation');
const authorization = require('./middlewares/authValidation');
const userController = require('./controllers/usersController');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar.
app.get('/', (request, response) => {
  response.send();
});

app.get('/user', authorization.validateAuth, userController.getUsers);
app.post('/user', user.validateUser, userController.createUsers);
app.post('/login', login.validateLogin, userController.getLogin);