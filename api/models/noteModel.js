const mongoose = require('mongoose')

const { Schema } = mongoose;

const NotesSchema = new Schema (
  {
    title: {
      type: String,
      required: 'Title can not be blank'
    },
    note: {
      type: String,
    },
  },
  {collection: 'notes'}
);

module.exports = mongoose.model('Note', NotesSchema);
