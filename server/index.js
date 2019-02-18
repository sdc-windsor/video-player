const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const port = 3000;
const db = require('../db/seed-db.js');
require('dotenv').config();

app.use(express.static('./public/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/videos/:id', (req, res) => {
  res.end();
});

app.get('/thumbnails/:id', (req, res) => {
  let id = req.params;
  console.log('found the seedDB***', db('videos'));
  // db('videos').select('thumbnails').where('id', id)
  //   .catch((err) => {
  //     console.log('could not find thumbnails', err)
  //   }).then((res) => {
  //   if (res) {
  //     console.log('found the thumbnails', res);
  //   }
  //   res.send('found the thumbnails');
  // });
  res.end();
});



