const { performance } = require('perf_hooks');
const videoData = require('../../helpers/sdc/dataSdcMdb.js');// array of video data
const indexMdb = require('./indexMdb.js');

const [db, Video, Counter] = [indexMdb.db, indexMdb.Video, indexMdb.Counter];

let initial = 0;
let final = 0;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database');
  let count = 0;
  const repeatTimes = 9999; // this number + 1 = total records inserted

  const insertData = () => {
    return videoData()
      .then((data) => {
        return Video.create(data)
          .then(() => {
            if (count < repeatTimes) {
              count++;
              return insertData();
            }
          });
      });
  };

  Counter.findById('videoId')
    .then((result) => {
      const startCount = {
        _id: 'videoId',
        video_number: 0,
      };
      if (result === null) {
        Counter.create(startCount);
      } else {
        Counter.deleteMany({})
          .then(() => Counter.create(startCount));
      }
      console.log('Deleting records...');
    })
    .then(() => {
      return Video.deleteMany({}, (errDel) => {
        if (errDel) {
          console.log('Error: ', errDel);
        }
        console.log('Inserting records... ');
      })
        .then(() => {
          initial = performance.now();
          return insertData();
        })
        .then(() => {
          final = performance.now();
          console.log('Time elapsed: ', `${(final - initial) / 1000} seconds`);
          console.log(`Inserted ${repeatTimes + 1} records`);
          process.exit();
        })
        .catch(errCatch => console.log('Error catch: ', errCatch));
    });
});
