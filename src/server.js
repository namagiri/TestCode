'use strict';

const express = require('express');

// Constants
const PORT = 8000;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello vishal, this is your 2nd docker test program!!!!\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
