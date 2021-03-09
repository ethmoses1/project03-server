const mongoose = require('mongoose');
const Note = mongoose.model('Note')

exports.list_all_notes = (req, res) => {
  Note.find({}, (err, notes) => {
    if(err) res.send(err)
    res.json(notes)
  });
};

exports.create_a_note = (req, res) => {
  const newNote = new Note(req.body);
  newNote.save((err, note) => {
    if(err) res.send(err);
    res.json(note)
  })
}

exports.read_a_note = (req, res) => {
  Note.findById(req.params.noteId, (err, note) => {
    if(err) res.send(err);
    res.json(note);
  })
};

exports.update_a_note = (req, res) => {
  Note.findOneAndUpdate(
    {_id: req.params.noteId },
    req.body,
    { new: true },
    (err, note ) => {
      if(err) res.send(err);
      res.json(note)
    }
  );
};

exports.delete_a_note = (req, res ) => {
  Note.deleteOne({_id: req.params.noteId }, (err) => {
    if(err) res.send(err);
    res.json({
      message: "note is deleted",
      _id: req.params.noteId
    })
  })
}
