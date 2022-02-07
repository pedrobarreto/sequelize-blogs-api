require('dotenv').config();
const express = require('express');
const { User } = require('./models');

const app = express();

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar.
app.get('/', (request, response) => {
  response.send();
});

app.get('/users', async (request, response) => {
const user = await User.findAll();
 response.status(200).json(user);
 });