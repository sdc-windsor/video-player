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

const Video = mongoose.model('Video', videoDataSchema);

const db = mongoose.connection;

module.exports = {db, mongoose, videoDataSchema, Video};