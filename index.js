require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

// validations
const user = require('./middlewares/userValidation');
const category = require('./middlewares/categoryValidation');
const auth = require('./middlewares/authValidation');
const post = require('./middlewares/blogPostValidation');

// controllers
const { validateLogin } = require('./middlewares/loginValidation');
const { loggedUser, createUsers, getUsers, getUser } = require('./controllers/usersController');
const { getCategories, createCategories } = require('./controllers/categoriesController');
const { createPosts, getPosts } = require('./controllers/blogPostsController');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar.
app.get('/', (request, response) => {
  response.send();
});

// User Endpoint
app.get('/user', auth.validateAuth, getUsers);
app.get('/user/:id', auth.validateAuth, user.validateId, getUser);
app.post('/user', user.validateBody, createUsers);

// Login Endpoint
app.post('/login', validateLogin, loggedUser);

// Categories Endpoint
app.get('/categories', auth.validateAuth, getCategories);
app.post('/categories', category.validateBody, auth.validateAuth, createCategories);

// BlogPosts Endpoint
app.get('/post', auth.validateAuth, getPosts);
app.post('/post', auth.validateAuth, post.validateBody, category.validateCategory, createPosts);
