const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const faker = require('faker');
const db = require('../../db/sdc/indexMdb.js');
var redis = require('redis');
var client = redis.createClient(6379, '52.53.241.140');

const redisCaching = (req, res, next) => {
  // console.log(`path ${req.path}`);
  // console.log(`originalUrl ${req.originalUrl}`);
  client.get(req.originalUrl, (err, results) => {
    if (err) {
      console.log(`Redis GET error: ${err}`);
      throw error;
    }
    if (results !== null ) {
      // console.log(`redis results ${results}`);
      res.json(JSON.parse(results));
    } else {
      next();
    }
  });
}

client.on('connect', function () {
  console.log('Redis client connected');
});

client.on('error', function (err) {
  console.log('Something went wrong ' + err);
});

const app = express();
app.use(express.static(path.join(__dirname, '/../../public/dist')));
app.use(redisCaching);
app.use(/^\/[0-9]+/, express.static(path.join(__dirname, '/../../public/dist')));
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

//endpoint for loader.io validation
app.get('/:file.txt', (req, res, next) => {
  res.sendfile(`${req.params.file}.txt`, { root: __dirname }, (err) => {
    if (err) {
      next(err);
    } else {
      console.log('file sent');
    }
  })
});

app.get('/videos/:id', (req, res) => {
  const docId = req.params.id;

  console.log(`path ${req.path}`);
  console.log(`originalUrl: ${req.originalUrl}`)

  db.Video.find({ id: docId })
    .then((results) => {
      res.json(results);
      client.set(req.originalUrl, JSON.stringify(results), redis.print);
    })
    .catch((err) => {
      res.send(`Caught error in finding video: ${err}`);
    });
});

app.get('/thumbnails/:id', (req, res) => {
  const docId = req.params.id;
  const params = (docId.length > 1) ? docId.split(',') : [docId];

  db.Video.find({ id: { $in: params } }, 'title author thumbnail')
    .then((thumbnailArr) => {
      if (thumbnailArr) {
        res.json(thumbnailArr);
        client.set(req.originalUrl, JSON.stringify(thumbnailArr), redis.print);
      } else {
        res.send('Unable to find thumbnail');
      }
    })
    .catch((err) => {
      res.send(`Caught error in finding thumbnail: ${err}`);
    });
});

app.post('/videos', (req, res) => {

  db.nextCount('videoId')
    .then((newId) => {
      db.Video.create({
        video_url: `${videoData.videoUrls[Math.floor(Math.random() * videoData.videoUrls.length)]}?v=${newId}`,
        thumbnail: videoData.thumbnails[Math.floor(Math.random() * videoData.thumbnails.length)],
        title: faker.address.streetName(),
        author: faker.internet.userName(),
        plays: faker.random.number(),
        id: newId,
      })
        .then(result => res.send(`Created new video: ${result}`));
    });
});

app.get('/videos', (req, res) => {

  let page = parseInt(req.query.page);
  if (isNaN(page) || page < 1) {
    page = 1;
  }

  page = (page - 1) * 100;

  db.Video.find({ id: { $gte: page } })
    .limit(100)
    .then(results => {
      res.send(`Videos from id: ${page}: ${results.join('<br/>')}`)
    })
    .catch(err => res.send(`Error finding documents: ${err}`));

})

app.put('/videos/:id', (req, res) => {
  const docId = req.params.id;

  db.Video.findOneAndUpdate({ id: docId }, generateVideoData(videoData.videoUrls, videoData.thumbnails), { new: true }, (err, doc) => {
    if (err) {
      res.send(`Error updating document: ${err}`);
    }
    res.send(`Document at id ${docId} updated to: ${doc}`);
  })
    .catch((error) => {
      res.send(`Error caught in updating document: ${error}`);
    });
});

app.delete('/videos/:id', (req, res) => {
  const docId = req.params.id;

  db.Video.deleteOne({ id: docId })
    .then((result) => {
      const deleted = result.deletedCount;

      if (deleted === 0) {
        res.send(`No video found with id: ${docId}.`);
      } else {
        res.send(`Deleted ${deleted} video at id: ${docId}.`);
      }
    });
});

module.exports = app;
