const { PerformanceObserver, performance } = require('perf_hooks');
const videoData = require('../../helpers/dataSdc.js');// array of video data
const indexMdb = require('./indexMdb.js');

const [db, mongoose] = [indexMdb.db, indexMdb.mongoose];

let initial = 0;
let final = 0;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database');
  let count = 0;
  const repeatTimes = 1; //this number * 100000 = total records inserted

  const videoDataSchema = new mongoose.Schema({
    video_url: String,
    thumbnail: String,
    title: String,
    author: String,
    plays: Number,
  });

  const Video = mongoose.model('Video', videoDataSchema);

  const insertData = () => {
    Video.insertMany(videoData)
      .then(() => {
        if (count < repeatTimes) {
          count++;
          return insertData();
        }
      })
      .then(() => {
        final = performance.now();
        console.log('time elapsed: ', final - initial)
      })
      .then(() => Video.estimatedDocumentCount())
      .then(items => console.log(`Inserted ${items} records`));
  };

  Video.deleteMany({}, (errDel) => {
    if (errDel) {
      console.log('Error: ', errDel);
    }
    console.log('Inserting records... ');
  })
    .then(() => {
      initial = performance.now();
      return insertData();
    })
    .catch(errCatch => console.log('Error catch: ', errCatch));
});
