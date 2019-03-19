const videoData = require('../helpers/video-data');// array of video data
const db = require('./index.js');

db.schema.dropTableIfExists('videos').then((exists) => {
  if (!exists) {
    console.log('error in dropping table', exists);
    return;
  }
  return db.schema.createTable('videos', (t) => {
    t.increments('id').primary();
    t.string('video_url', 255);
    t.text('thumbnail');
    t.string('title', 50);
    t.string('author', 50);
    t.integer('plays');
  }).then(() => {
    return db('videos').insert(videoData)
      .catch((err) => {
        console.log('found an error in db seeding', err);
      }).then(() => {
        return db.select('*').from('videos').then((rows) => {
          if (!rows) {
            console.log('rows not found', rows);
          }
          console.log('Success! Here are the rows:', rows);
        });
      });
  });
});

module.exports = db;
