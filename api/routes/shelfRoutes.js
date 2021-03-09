const shelfBuilder = require('../controllers/shelfController');

module.exports = (app) => {
 app.route('/shelfs')
  .get(shelfBuilder.list_all_shelfs)  //index
  .post(shelfBuilder.create_a_shelf)  //create

  app.route('/shelfs/:shelfId')
     .get(shelfBuilder.read_a_shelf)       // show
     .put(shelfBuilder.update_a_shelf)     // update
     .delete(shelfBuilder.delete_a_shelf);
};
