const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/videodb');

const db = mongoose.connection;

module.exports = {db, mongoose};