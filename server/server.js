const app = require('../server/index.js');
require('dotenv').config(); // will be used in production later
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));