const mongoose = require('mongoose');

const { Schema } = mongoose;
// this is the book model you can changed to anything else! customer, user, etc
const bookModels = new Schema(
  {
    title: { type: String },
    author: { type: String },
    genre: { type: String },
    read: { type: Boolean },
  },
);
module.exports = mongoose.model('Book', bookModels);
