const noteBuilder = require('../controllers/notesController');

module.exports = (app) => {
 app.route('/notes')
  .get(noteBuilder.list_all_notes)  //index
  .post(noteBuilder.create_a_note)  //create

  app.route('/notes/:noteId')
     .get(noteBuilder.read_a_note)       // show
     .put(noteBuilder.update_a_note)     // update
     .delete(noteBuilder.delete_a_note);
};
