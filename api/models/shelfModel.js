const mongoose = require('mongoose')

const { Schema } = mongoose;

const ShelfsSchema = new Schema (
  {
    genre: {
      type: String,
      // required: 'Title can not be blank'
    },
    title: {
      type: String,
      required: 'title can not be blank'
    },
  },
  {collection: 'shelfs'}
);

module.exports = mongoose.model('Shelf', ShelfsSchema);
