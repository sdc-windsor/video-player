const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const db = require('../db/index.js');

const app = express();
app.use(express.static(path.join(__dirname, '/../public/dist')));
app.use('/:id', express.static(path.join(__dirname, '/../public/dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/videos/:id', (req, res) => {
  const { id } = req.params;

  db.select('id', 'video_url', 'title', 'author', 'plays')
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
  const { id } = req.params;
  const params = (id.length > 1) ? id.split(',') : [id];

  db.select('thumbnail').from('videos')
    .whereIn('id', params)
    .catch((err) => {
      console.log('could not find thumbnail', err);
    })
    .then((thumbnailArr) => {
      if (thumbnailArr) {
        console.log('found the thumbnail', thumbnailArr);
        res.json(thumbnailArr);
      } else {
        res.send('unable to find thumbnail');
      }
    });
});

module.exports = app;
