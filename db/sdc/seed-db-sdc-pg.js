const { PerformanceObserver, performance } = require('perf_hooks');
const videoData = require('../../helpers/sdc/dataSdcPg.js');// array of video data
const db = require('../index.js');

let initial = 0;
let final = 0;

let count = 0;
const repeatTimes = 999; //(this number * 10000) + 10000 = total records inserted

const insertData = () => {
  return db('videos').insert(videoData)
    .then(() => {
      if (count < repeatTimes) {
        count++;
        return insertData();
      }
    });
}

db.schema.dropTableIfExists('videos')
  .then(() => {
    initial = performance.now();
    console.log('Seeding database...');
    return db.schema.createTable('videos', (t) => {
      t.increments('id').primary();
      t.string('video_url', 255);
      t.text('thumbnail');
      t.string('title', 50);
      t.string('author', 50);
      t.integer('plays');
    })
      .then(() => insertData())
      .then(() => {
        console.log(`Database seeded, ${(repeatTimes * 10000) + 10000} records`);
        final = performance.now();
        console.log('Time elapsed: ', `${(final - initial) / 1000} seconds`)
        process.exit();
      })
      .catch((err) => {
        console.log('found an error in db seeding', err);
      });
  });

module.exports = db;
