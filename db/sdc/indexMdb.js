const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/videodb', { useNewUrlParser: true });

const db = mongoose.connection;

module.exports = {db, mongoose};