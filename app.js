const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const Book = require('./models/bookModels');
const bookRouter = require('./routs/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my nodemone api');
});

app.listen(port, () => {
  console.log(`running on port${port}`);
});
