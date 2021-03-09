const reviewBuilder = require('../controllers/reviewsController');

module.exports = (app) => {
 app.route('/reviews')
  .get(reviewBuilder.list_all_reviews)  //index
  .post(reviewBuilder.create_a_review)  //create

  app.route('/reviews/:reviewId')
     .get(reviewBuilder.read_a_review)       // show
     .put(reviewBuilder.update_a_review)     // update
     .delete(reviewBuilder.delete_a_review);
};
