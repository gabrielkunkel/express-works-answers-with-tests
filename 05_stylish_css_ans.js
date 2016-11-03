/**
 * Created by gabrielkunkel on 10/29/16 in JavaScript.
 */

// set port, directory
let port = 8882;
let filepath = __dirname;
if (process.env.NODE_ENV !== 'test') {
  port = process.argv[2];
  filepath = process.argv[3];
}

// import
const express = require('express');
const stylus = require('stylus');

let app = express();

app.use(stylus.middleware(filepath));
app.use(express.static(filepath));

app.listen(port);

module.exports = app;