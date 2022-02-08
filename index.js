require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userSchema = require('./middlewares/userValidation');
const loginSchema = require('./middlewares/loginValidation');
const userController = require('./controllers/usersController');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar.
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', userSchema.validateUser, userController.createUsers);
app.post('/login', loginSchema.validateLogin, userController.getLogin);