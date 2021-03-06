const mongoose = require('mongoose');
mongoose.connect('mongodb://generic:SDC@ec2-54-67-126-172.us-west-1.compute.amazonaws.com/videodb', { useNewUrlParser: true, poolSize: 5 });

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