const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookModels = new Schema(
  {
    title: { type: String },
    author: { type: String },
    genre: { type: String },
    read: { type: Boolean },
  },
);
module.exports = mongoose.model('Book', bookModels);
