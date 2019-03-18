const videoData = require('../helpers/dataSdc.js');// array of video data
const db = require('../db/indexMdb.js');

let count = 0;
const repeatTimes = 10; //this number * 10000 = total records inserted

const insertData = () => {
  return Videos.insertMany(videoData, err => console.log('Error insert: ', err))
    .then(() => {
      if (count < repeatTimes) {
        count++;
        return insertData();
      }
    });
}

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database');

  let videoDataSchema = new db.mongoose.Schema({
    id: Number,
    video_url: String,
    thumbnail: String,
    title: String,
    author: String,
    plays: Number
  });

  let Videos = db.mongoose.model('Videos', videoDataSchema);

  Videos.deleteMany({}, err => console.log('Error: ', err))
    .then(() => insertData())
    .catch(err => console.log('Error catch: ', err))
});