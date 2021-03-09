const mongoose = require('mongoose')

const { Schema } = mongoose;

const ReviewsSchema = new Schema (
  {
    title: {
      type: String,
      required: 'Title can not be blank'
    },
    review: {
      type: String,
    },
  },
  {collection: 'reviews'}
);

module.exports = mongoose.model('Review', ReviewsSchema);
