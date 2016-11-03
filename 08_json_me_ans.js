/**
 * Created by gabrielkunkel on 11/1/16 in JavaScript.
 */

// set port & file for processing
let port = 8883;
let pathwayToFile = './books.json';
if (process.env.NODE_ENV !== 'test') {
  port = process.argv[2];
  pathwayToFile = process.argv[3];
}

// import
const express = require('express');
const fs = require('fs');

// server
let app = express();

app.get('/books', function (req, res) {

  fs.readFile(pathwayToFile, function (err, data) {
    if (err) return res.sendStatus(500);
    try {
      object = JSON.parse(data);
    } catch (err) {
      res.sendStatus(500);
    }
    res.json(object);
  });

});

app.listen(port);

module.exports = app;
