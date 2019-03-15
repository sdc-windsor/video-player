const knex = require('knex');
require('dotenv').config();

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.RDS_HOSTNAME,
    user: 'postgres',
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DBNAME,
  },
});

module.exports = db;
