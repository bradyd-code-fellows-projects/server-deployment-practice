'use strict';

const express = require('express');
const app = express(); // singleton: single instance ON PURPOSE
require('dotenv').config();

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.status(200).send('This is my test server');
})

app.get('/hello', (req, res) => {
  res.status(200).send('Hello World');
})

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = {app, start};