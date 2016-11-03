/**
 * Created by gabrielkunkel on 11/1/16 in JavaScript.
 */

// set port
let port = 8884;
if (process.env.NODE_ENV !== 'test') {
  port = process.argv[2];
}

// server
const express = require('express');
let app = express();

app.get('/search', function (req, res) {
  res.json(req.query);
});

app.listen(port);

module.exports = app;
