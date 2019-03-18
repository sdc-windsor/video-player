const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/videos');

const db = mongoose.connection;

module.exports = db;