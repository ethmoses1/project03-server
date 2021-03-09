const mongoose = require('mongoose');
const Review = mongoose.model('Review')

exports.list_all_reviews = (req, res) => {
  Review.find({}, (err, reviews) => {
    if(err) res.send(err)
    res.json(reviews)
  });
};

exports.create_a_review = (req, res) => {
  const newReview = new Review(req.body);
  newReview.save((err, review) => {
    if(err) res.send(err);
    res.json(review)
  })
}

exports.read_a_review = (req, res) => {
  Review.findById(req.params.reviewId, (err, review) => {
    if(err) res.send(err);
    res.json(review);
  })
};

exports.update_a_review = (req, res) => {
  Review.findOneAndUpdate(
    {_id: req.params.reviewId },
    req.body,
    { new: true },
    (err, review ) => {
      if(err) res.send(err);
      res.json(review)
    }
  );
};

exports.delete_a_review = (req, res ) => {
  Review.deleteOne({_id: req.params.reviewsId }, (err) => {
    if(err) res.send(err);
    res.json({
      message: "Review is deleted",
      _id: req.params.reviewId
    })
  })
}
