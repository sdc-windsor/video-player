const knex = require('knex');
require('dotenv').config();

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'ckallemeyn',
    password: process.env.PASSWORD,
    database: 'videos',
  },
});

module.exports = db;
