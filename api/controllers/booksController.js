const mongoose = require('mongoose');
const Book = mongoose.model('Book')

exports.list_all_books = (req, res) => {
  Book.find({}, (err, books) => {
    if(err) res.send(err)
    res.json(books)
  });
};

exports.create_a_book = (req, res) => {
  const newBook = new Book(req.body);
  newBook.save((err, book) => {
    if(err) res.send(err);
    res.json(book)
  })
}

exports.read_a_book = (req, res) => {
  Book.findById(req.params.bookId, (err, book) => {
    if(err) res.send(err);
    res.json(book);
  })
};

exports.update_a_book = (req, res) => {
  Book.findOneAndUpdate(
    {_id: req.params.bookId },
    req.body,
    { new: true },
    (err, book ) => {
      if(err) res.send(err);
      res.json(book)
    }
  );
};

exports.delete_a_book = (req, res ) => {
  Book.deleteOne({_id: req.params.bookId }, (err) => {
    if(err) res.send(err);
    res.json({
      message: "Book is deleted",
      _id: req.params.bookId
    })
  })
}
