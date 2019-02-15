const { Pool } = require('pg');
const connectionString = 'postgresql://ckallemeyn:videoplayer-service@127.0.0.1:5432/videos';
const pool = new Pool({ connectionString });

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('found the error for current time', err)
  }
  console.log('found the results', res);
  pool.end();
});

