const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
require('dotenv').config(); // will be used in production later
const port = process.env.PORT || 3000;
const db = require('../db/index.js');

app.use(express.static('./public/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
});


app.get('/videos/:id', (req, res) => {
  let id = JSON.parse(req.params.id);

  db.select('id', 'title', 'author', 'plays')
    .from('videos')
    .where('id', id)
    .then((data) => {
      console.log('here is a list of the data', data);
      res.json(data);
    })
    .catch((err) => {
      console.log('could not find video', err);
      res.send('unable to find data');
    });
});


app.get('/thumbnails/:id', (req, res) => {
  let id = JSON.parse(req.params.id);

  db.select('thumbnail').from('videos')
    .where('id', id)
    .catch((err) => {
      console.log('could not find thumbnail', err)
    }).then((thumbnail) => {
    if (thumbnail) {
      console.log('found the thumbnail', thumbnail);
      res.json(thumbnail);
    } else {
      res.send('unable to find thumbnail');
    }
  });
});

module.exports = app;