const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const db = require('../../db/sdc/indexMdb.js');

const app = express();
app.use(express.static(path.join(__dirname, '/../public/dist')));
app.use('/:id', express.static(path.join(__dirname, '/../public/dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/videos/:id', (req, res) => {
  const docId = req.params.id;

  db.Video.findOne({ id: docId })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log('Could not find video', err);
      res.send('Error getting data');
    });
})


app.get('/thumbnails/:id', (req, res) => {
  const docId = req.params.id;
  const params = (docId.length > 1) ? docId.split(',') : [docId];

  db.Video.find({ 'id': { $in: params } }, 'title author thumbnail')
    .then((thumbnailArr) => {
      if (thumbnailArr) {
        res.json(thumbnailArr);
      } else {
        res.send('Unable to find thumbnail');
      }
    })
    .catch((err) => {
      console.log('could not find thumbnail', err);
    });

});

module.exports = app;
