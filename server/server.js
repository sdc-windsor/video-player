const app = require('./index.js');

const port = process.env.PORT || 3001;
require('dotenv').config();

app.listen(port, () => console.log(`listening on port ${port}`));
