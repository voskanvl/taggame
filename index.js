const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8082;
app.use(express.static(path.resolve('static')));
app.listen(PORT, () => console.log(`start on ${PORT} ...`));
