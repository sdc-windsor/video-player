const videoData = require('../helpers/data.js');// array of video data
const db = require('../db/index.js');

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
      .then(() => db('videos').insert(videoData))
      .then(() => {
        console.log('database seeded');
        process.exit();
      })
      .catch((err) => {
        console.log('found an error in db seeding', err);
      });
  });

module.exports = db;
