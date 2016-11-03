/**
 * Created by gabrielkunkel on 10/29/16 in JavaScript.
 */

// set port
let port = 8886;
if (process.env.NODE_ENV !== 'test') {
  port = process.argv[2];
}

const express = require('express');
const bodyparser = require('body-parser');


let app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function (req, res) {
  res.end(req.body.str.split('').reverse().join(''));
})

app.listen(port);

module.exports = app;