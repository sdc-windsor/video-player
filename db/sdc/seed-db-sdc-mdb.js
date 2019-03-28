const { PerformanceObserver, performance } = require('perf_hooks');
const videoData = require('../../helpers/sdc/dataSdcMdb.js');// array of video data
const indexMdb = require('./indexMdb.js');

const [db, Video, Counter] = [indexMdb.db, indexMdb.Video, indexMdb.Counter];

let initial = 0;
let final = 0;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database');
  let count = 0;
  const repeatTimes = 9; //this number * 100000 = total records inserted

  const insertData = () => {
    Video.estimatedDocumentCount()
      .then((counter) => {
        let newVideoData = videoData;
        for (var i = newVideoData.length - 1; i >= 0; i--) {
          newVideoData[i].id = counter + (i + 1);
        }
        return Video.insertMany(newVideoData)
          .then(() => {
            if (count < repeatTimes) {
              count++;
              return insertData();
            }
          })
      })
      .then(() => {
        final = performance.now();
        console.log('Time elapsed: ', `${(final - initial) / 1000} seconds`)
      })
      .then(() => console.log(`Inserted 1000000 records`));

  };

  Counter.create({
    _id: "videoId",
    video_number: 0
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
        .catch(errCatch => console.log('Error catch: ', errCatch));
    });

});
