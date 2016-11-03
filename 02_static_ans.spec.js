/**
 * Created by gabrielkunkel on 11/1/16 in JavaScript.
 */

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./02_static_ans');
const should = chai.should();

chai.use(chaiHttp);

describe("static", function () {

  it("should send us a static html page", function(done) {
    chai.request(server)
      .get('/')
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.html;
        done();
      });
  }); // end it

}); // end describe