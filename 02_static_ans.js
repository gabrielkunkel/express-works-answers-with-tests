/**
 * Created by gabrielkunkel on 10/29/16 in JavaScript.
 */

// set port
let port = 8889;
let pathway = __dirname;

// if we're not testing
if (process.env.NODE_ENV !== 'test') {
  port = process.argv[2];
  pathway = process.argv[3];
}

// import
const express = require('express');

// server
let app = express();

app.use(express.static(pathway));

app.listen(port);

module.exports = app;