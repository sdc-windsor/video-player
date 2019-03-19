const videoData = require('../../helpers/dataSdc.js');// array of video data
const indexMdb = require('./indexMdb.js');
const db = indexMdb.db;
const mongoose = indexMdb.mongoose;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database');
  let count = 0;
  const repeatTimes = 9; //this number * 10000 = total records inserted

  let videoDataSchema = new mongoose.Schema({
    video_url: String,
    thumbnail: String,
    title: String,
    author: String,
    plays: Number
  });

  let Video = mongoose.model('Video', videoDataSchema);

  const insertData = () => {
    Video.insertMany(videoData)
      .then(() => {
        if (count < repeatTimes) {
          count++;
          return insertData();
        }
      });
  }

  Video.findById(1, (err, docs) => {
    if (err) {
      console.log('Error findById: ', err)
      return insertData();
    } else {
      Video.deleteMany({}, err => console.log('Error: ', err))
        .then(() => insertData())
        .then(() => console.log('Inserted records'))
        .catch(err => console.log('Error catch: ', err))
    }
  });

});