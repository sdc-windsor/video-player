const app = require('./index.js');

const port = process.env.PORT || 3000;
require('dotenv').config(); // will be used in production later

app.listen(port, () => console.log(`listening on port ${port}`));
