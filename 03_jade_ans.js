/**
 * Created by gabrielkunkel on 10/29/16 in JavaScript.
 */

// set port, view directory
let port = 8887;
let pathway = __dirname;

// if we're not testing
if (process.env.NODE_ENV !== 'test') {
  port = process.argv[2];
  pathway = process.argv[3];
}

//server
const express = require('express');
let app = express();

// view engine
app.set('view engine', 'jade');
app.set('views', pathway);

app.get('/home', function (req, res) {
  res.render('index', {
    date: new Date().toDateString()
  });
});

app.listen(port);

module.exports = app;