const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const faker = require('faker');
const db = require('../../db/sdc/indexMdb.js');

const app = express();
app.use(express.static(path.join(__dirname, '/../../public/dist')));
app.use('/:id', express.static(path.join(__dirname, '/../../public/dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

const videoData = {
  videoUrls: [
    'https://player.vimeo.com/video/65107797/',
    'https://player.vimeo.com/video/316284002/',
    'https://player.vimeo.com/video/78110105/',
    'https://player.vimeo.com/video/117747482/',
    'https://player.vimeo.com/video/54802209/',
    'https://player.vimeo.com/video/35159390/',
    'https://player.vimeo.com/video/25658743/',
    'https://player.vimeo.com/video/89009039/',
    'https://player.vimeo.com/video/688779/',
    'https://player.vimeo.com/video/7977632/',
  ],
  thumbnails: [
    'https://i.vimeocdn.com/video/435992078_130x73.jpg',
    'https://i.vimeocdn.com/video/758264042_130x73.jpg',
    'https://i.vimeocdn.com/video/453451270_130x73.jpg',
    'https://i.vimeocdn.com/video/504556356_130x73.jpg',
    'https://i.vimeocdn.com/video/497536567_130x73.jpg',
    'https://i.vimeocdn.com/video/240103331_130x73.jpg',
    'https://i.vimeocdn.com/video/169092890_130x73.jpg',
    'https://i.vimeocdn.com/video/499453777_130x73.jpg',
    'https://i.vimeocdn.com/video/51685906_130x73.jpg',
    'https://i.vimeocdn.com/video/35989560_130x73.jpg',
  ],
};

const generateVideoData = (arr1, arr2) => {
  const url = arr1[Math.floor(Math.random() * arr1.length)];
  const updatedUrl = `${url}?v=${Math.random() * Math.floor(100000)}`;
  return {
    video_url: updatedUrl,
    thumbnail: arr2[Math.floor(Math.random() * arr2.length)],
    title: faker.address.streetName(),
    author: faker.internet.userName(),
    plays: faker.random.number(),
  };
};

app.get('/videos/:id', (req, res) => {
  const docId = req.params.id;

  db.Video.find({ id: docId })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log('Could not find video', err);
      res.send('Error getting data');
    });
});

app.get('/thumbnails/:id', (req, res) => {
  const docId = req.params.id;
  const params = (docId.length > 1) ? docId.split(',') : [docId];

  db.Video.find({ id: { $in: params } }, 'title author thumbnail')
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

app.post('/videos/:id', (req, res) => {
  const docId = req.params.id;

  db.Video.find({ id: docId }, (err, docs) => {
    if (err) {
      res.send(`Find error: ${err}`);
    } else if (Object.keys(docs).length === 0) {
      const newVideo = generateVideoData(videoData.videoUrls, videoData.thumbnails);
      newVideo.id = docId;

      db.Video.create(newVideo, (createErr, newDoc) => {
        if (createErr) {
          res.send(`Create error: ${createErr}`);
        } else {
          res.send(`New video created: ${newDoc}`);
        }
      });
    } else {
      res.send(`Video already exists ${docs}`);
    }
  });
});

app.patch('/videos/:id', (req, res) => {
  const docId = req.params.id;

  db.Video.findOneAndUpdate({ id: docId }, generateVideoData(videoData.videoUrls, videoData.thumbnails), { new: true }, (err, doc) => {
    if (err) {
      res.send('Error updating document.');
    }
    res.send(`Document at id ${docId} updated to: ${doc}`);
  })
    .catch((error) => {
      res.send(`Error: ${error}`);
    });
});

app.delete('/videos/:id', (req, res)=>{
  const docId = req.params.id;

  db.Video.deleteOne({ id: docId })
  .then((result)=>{
    const deleted = result.deletedCount;

    if (deleted === 0) {
      res.send(`No video found with id: ${docId}.`);
    } else {
      res.send(`Deleted ${deleted} video at id: ${docId}.`);
    }
  })
})

module.exports = app;
