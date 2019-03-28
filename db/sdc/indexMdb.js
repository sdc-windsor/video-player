const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/videodb', { useNewUrlParser: true });

const videoDataSchema = new mongoose.Schema({
  id: { type: Number, index: true, unique: true },
  video_url: String,
  thumbnail: String,
  title: String,
  author: String,
  plays: Number,
});

const counterSchema = new mongoose.Schema({
  _id: String,
  video_number: Number,
});

const Video = mongoose.model('Video', videoDataSchema);

const Counter = mongoose.model('Counter', counterSchema);

const db = mongoose.connection;

const nextCount = (videoId) => {
  return Counter.findOneAndUpdate({ _id: videoId }, { $inc: { video_number: 1 } }, { new: true })
    .then(result => result.video_number);
};

module.exports = { db, mongoose, videoDataSchema, counterSchema, Video, Counter, nextCount };