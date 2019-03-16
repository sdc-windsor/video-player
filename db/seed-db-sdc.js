const videoData = require('../helpers/dataSdc.js');// array of video data
const db = require('../db/index.js');
var count = 0;
var repeatTimes = 1000; //this number * 10000 = total records inserted

var insertData = () => {
  return db('videos').insert(videoData)
  .then(()=>{
    if (count < repeatTimes) {
      count++;
      return insertData();
    }
  });
}

db.schema.dropTableIfExists('videos')
  .then(() => {
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
        console.log('database seeded');
        process.exit();
      })
      .catch((err) => {
        console.log('found an error in db seeding', err);
      });
  });

module.exports = db;
