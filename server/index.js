const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT | 3000;
const { Pool } = require('pg');
const Pool = new Pool();

app.use(express.static('./public/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/videos/:video_id', (req, res) => {
  
  res.end();
});

app.get('/thumbnails/:video_id', (req, res) => {

  res.end();
});



