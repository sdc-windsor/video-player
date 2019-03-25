const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/videodb', { useNewUrlParser: true });

const videoDataSchema = new mongoose.Schema({
  id: Number,
  video_url: String,
  thumbnail: String,
  title: String,
  author: String,
  plays: Number,
});

// videoDataSchema.index({ id: 1, type: 1, unique: true });

const Video = mongoose.model('Video', videoDataSchema);

const db = mongoose.connection;

module.exports = {db, mongoose, videoDataSchema, Video};