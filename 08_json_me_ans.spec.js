/**
 * Created by gabrielkunkel on 11/2/16 in JavaScript.
 */

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./08_json_me_ans');
const should = chai.should();

chai.use(chaiHttp);

describe("json me server", function () {

  it("should send json file", function(done) {
    chai.request(server)
      .get('/books')
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.eql([{
          "title": "Express.js Guide",
          "tags": ["node.js", "express.js"],
          "url": "http://expressjsguide.com"},
          {"title": "Rapid Prototyping with JS",
            "tags": ["backbone.js", "node.js", "mongodb"],
            "url": "http://rpjs.co"},
          {"title": "JavaScript: The Good Parts",
            "tags": ["javascript"]}
        ]);
        done();
      });
  }); // end it

}); // end describe