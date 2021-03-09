const bookBuilder = require('../controllers/booksController');

module.exports = (app) => {
 app.route('/books')
  .get(bookBuilder.list_all_books)  //index
  .post(bookBuilder.create_a_book)  //create

  app.route('/books/:bookId')
     .get(bookBuilder.read_a_book)       // show
     .put(bookBuilder.update_a_book)     // update
     .delete(bookBuilder.delete_a_book);
};
