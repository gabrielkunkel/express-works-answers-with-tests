/**
 * Created by gabrielkunkel on 11/1/16 in JavaScript.
 */

// set port
let port = 8885;
if (process.env.NODE_ENV !== 'test') {
  port = process.argv[2];
}

// import
const express = require('express');
const crypto = require('crypto');


let app = express();

app.put('/message/:id', function (req, res) {

  let hashReturned = crypto
    .createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex');

  res.end(hashReturned)

})

app.listen(port);

module.exports = app;
