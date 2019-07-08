const { performance } = require('perf_hooks');
const videoData = require('../helpers/sdc/dataSdcMdb.js');// array of video data
const { db, Video, Counter } = require('./indexMdb.js');

let initial = 0;
let final = 0;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database');
  let count = 0;
  let repeatCounter = 0;
  const repeatTimes = 999; // (this number + 1) * 10000 = total records inserted

  const insertData = () => {
    return videoData()
      .then((dataArr) => {
        const dataArrId = dataArr.slice();
        count += dataArrId.length;

        for (let i = count - dataArrId.length, j = 0; i < count; i++ , j++) {
          dataArrId[j].video_url += `?v=${i + 1}`;
          dataArrId[j].id = i + 1;
        }

        return dataArrId;
      })
      .then(dataArrId => Video.insertMany(dataArrId))
      .then(() => {
        if (repeatCounter < repeatTimes) {
          repeatCounter++;
          return insertData();
        }
      });
  };

  Counter.findById('videoId')
    .then((result) => {

      const startCount = {
        _id: 'videoId',
        video_number: 10000000,
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
          console.log(`Inserted ${(repeatTimes + 1) * 10000} records`);
          process.exit();
        })
        .catch(errCatch => console.log('Error catch: ', errCatch));
    });
});
