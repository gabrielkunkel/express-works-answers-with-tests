/**
 * Created by gabrielkunkel on 10/29/16 in JavaScript.
 */

// import
const express = require('express');

// set port
let port = 8888;
if (process.env.NODE_ENV !== 'test') {
  port = process.argv[2];
}

// express app
let app = express();

app.get('/home', function (req, res) {
  res.end('Hello World!');
})

app.listen(port);

module.exports = app;