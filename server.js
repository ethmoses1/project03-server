const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //Probably unnecessary

global.Book = require('./api/models/bookModel');
const bookRoutes = require('./api/routes/bookRoutes')

global.Review = require('./api/models/reviewModel');
const reviewRoutes = require('./api/routes/reviewRoutes')

global.Shelf = require('./api/models/shelfModel');
const shelfRoutes = require('./api/routes/shelfRoutes')

global.Note = require('./api/models/noteModel');
const noteRoutes = require('./api/routes/noteRoutes')

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
  'mongodb+srv://Zibrary:chicken12@cluster0.qvf0p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {useNewUrlParser: true}
)

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Probably replaced with: app.use(express.json());
shelfRoutes(app)
bookRoutes(app)
reviewRoutes(app)
noteRoutes(app)
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${ req.originalUrl } not found` });
})

console.log('Server Started on http://localhost:' + port)
