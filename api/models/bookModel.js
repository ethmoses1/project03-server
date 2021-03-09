const mongoose = require('mongoose')

const { Schema } = mongoose;

const BooksSchema = new Schema (
  {
    title: {
      type: String,
      required: 'Title can not be blank'
    },
    authors: [{
      type: String,
      required: 'Author can not be blank'
    }],
    cover: {
      type: String,
    },
    description: {
      type: String,
      required: 'Title can not be blank'
    },
  },
  {collection: 'books'}
);

module.exports = mongoose.model('Book', BooksSchema);
