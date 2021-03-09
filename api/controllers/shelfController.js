const mongoose = require('mongoose');
const Shelf = mongoose.model('Shelf')

exports.list_all_shelfs = (req, res) => {
  Shelf.find({}, (err, shelfs) => {
    if(err) res.send(err)
    res.json(shelfs)
  });
};

exports.create_a_shelf = (req, res) => {
  const newShelf = new Shelf(req.body);
  newShelf.save((err, shelf) => {
    if(err) res.send(err);
    res.json(shelf)
  })
}

exports.read_a_shelf = (req, res) => {
  Shelf.findById(req.params.shelfId, (err, shelf) => {
    if(err) res.send(err);
    res.json(shelf);
  })
};

exports.update_a_shelf = (req, res) => {
  Shelf.findOneAndUpdate(
    {_id: req.params.shelfId },
    req.body,
    { new: true },
    (err, shelf ) => {
      if(err) res.send(err);
      res.json(shelf)
    }
  );
};

exports.delete_a_shelf = (req, res ) => {
  Shelf.deleteOne({_id: req.params.shelfsId }, (err) => {
    if(err) res.send(err);
    res.json({
      message: "shelf is deleted",
      _id: req.params.shelfId
    })
  })
}
